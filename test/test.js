// var assert = require('assert');
var expect = require('assert').expect;

// var express = require('express');     // npm install --save express
var request = require('supertest');   // npm install --save-dev supertest
const app = require('../app');

let TODOS_TEST = ["put on sock", "put on shoe", "tie laces"]

describe('GET scenarios', function () {

    context('GET /todos', function () {

        it('should return 404 for unsupported endpoints', function (done) {
            request(app)
                .get('/randomtext')
                .expect(404)
                .end(done)

        });
        it('should redirect to /todos and list all todos in deafult path /', function (done) {
            request(app)
                .get('/')
                .expect(302)
                .expect('Location', '/todos')
                .end(done)

        });

        it('should redirect to /todos and list all todos when receiving /todo', function (done) {
            request(app)
                .get('/todo')
                .expect(302)
                .expect('Location', '/todos')
                .end(done)
        });

        it('should list all todos when receiving /todos', function (done) {
            request(app)
                .get('/todos')
                .expect(200,
                    TODOS_TEST,
                    done);
     });

    });


    context('GET todos/:id', function () {

        it('should show todo item when it exists', function (done) {
            request(app)
                .get('/todos/1')
                .expect(200,
                       { title: "put on shoe" },
                       done);

        });

        it('should throw an error when todo_id does not exist', function (done) {
            request(app)
                .get('/todos/11')
                .expect(404, done);
        });
    });

});




describe('POST scenarios', function () {

    // it('should add new todo item', function (done) {
    //     let new_item = "new-item"
    //     TODOS_TEST.push(new_item)
    //     request(app).post('/todos')
    //         .send({ title: new_item })
    //         .expect(200,
    //             TODOS_TEST.toString(),
    //             done);
    // });

});


describe('PUT scenarios', function () {
});


describe('DELETE scenarios', function () {
});