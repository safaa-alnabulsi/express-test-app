# express-test-app
A simple API to get started with writing APIs with express.js

## Description
* State stored in a global object for simplicity
* Datamodel suggestion: a list of strings, the index of the string is the identifier
    * note difference between for-in and for-of iteration in Javascript
* Try to use mocha.js and expect.js to write a unit test suite to test the API. Using setup and teardown methods and sub-suites can help organize the tests.

## API endpoints 
* GET /todos redirects to /todos/
* GET /todos/ returns a list in format [“put on sock”, “put on shoe”, “tie laces”]
* GET /todos/:id fetches a todo of id `id` {“title”: “put on sock”, “idx”: 0}
* PUT /todos/:id updates the todo of id `id` and overwrites the item at the index with the contents of the request body (e.g. a string)
* POST /todos/ will append the request body (e.g. a string) to the list of strings in memory
* DELETE /todos/:id will remove a todo item

## Development & local testing

To start the api locally

    npm install && node app.js

### with browser

go to http://localhost:3000/todos

### with curl locally 

* POST /todos/ 
```

      curl -X POST http://localhost:3000/todos -H 'Content-Type: application/json' -d '{"title": 2}'
```

* PUT /todos/:id 
```
      curl -X PUT http://localhost:3000/todos/0 -H 'Content-Type: application/json' -d '{"title":"halllllooo"}'
```

* DELETE /todos/:id
```
      curl -X DELETE http://localhost:3000/todos/1 -H 'Content-Type: application/json'
```

## Running tests

    npm test

## References
- https://mochajs.org/
- https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/
- http://expressjs.com/en/starter/hello-world.html
- HTTP assertions: https://www.npmjs.com/package/supertest