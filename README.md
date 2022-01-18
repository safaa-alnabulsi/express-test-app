# express-test-app



## Testing API enpoints with curl locally 


curl -X POST http://localhost:3000/todos -H 'Content-Type: application/json' -d '{"title": 2}'


curl -X PUT http://localhost:3000/todos/0 -H 'Content-Type: application/json' -d '{"title":"halllllooo"}'


curl -X DELETE http://localhost:3000/todos/1 -H 'Content-Type: application/json'