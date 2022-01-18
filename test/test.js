var assert = require('assert');

var express = require('express');     // npm install --save express
var expect = require('chai').expect;  // npm install --save-dev chai
var request = require('supertest');   // npm install --save-dev supertest
const app = require('../app');

let TODOS_TEST = ["put on sock", "put on shoe", "tie laces"]

describe('GET scenarios', function () {

    describe('GET /todos', function () {
        it('Redirect and list all todos', function (done) {
            request(app)
                .get('/')
                .expect(302)
                .expect('Location', '/todos')
                .end(done)

        });

        it('Redirect and list all todos', function (done) {
            request(app)
                .get('/todo')
                .expect(302)
                .expect('Location', '/todos')
                .end(done)
        });

        it('List all todos', function (done) {
            request(app)
                .get('/todos')
                .expect(200, done);
        });

    });


    describe('GET todos/:id', function () {

        it('should show todo item when it exists', function (done) {
            request(app)
                .get('/todos/1')
                .expect(200, done)
                .send({ title: "put on shoe" });
        });

        it('throw an error when it does not exists', function (done) {
            request(app)
                .get('/todos/11')
                .expect(404)
                // .send(app.ERRORS[404])
                .end(done);
        });
    });

});




describe('POST scenarios', function () {
});


describe('PUT scenarios', function () {
});


describe('DELETE scenarios', function () {
});