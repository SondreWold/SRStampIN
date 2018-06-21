var nano = require('nano')('http://localhost:5984')
nano.db.create('usermapping')
var books = nano.db.use('usermapping')

// Insert a book document in the books database
books.insert({ phoneID: '123456789' }, null, function (err, body) {
  if (err) {
    console.log(err)
  } else {
    console.log(body)
  }
})

// Get a list of all books
books.list(function (err, body) {
  if (err) {
    console.log(err)
  } else {
    console.log(body.rows)
  }
})

