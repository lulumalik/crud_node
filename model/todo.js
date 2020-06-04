'use strict';

var sql = require('../connection');

// object constructor
var Todo = function(todo) {
    this.todo = todo.todo;
    this.des = todo.des;
    this.date = new Date();
}

Todo.getAllTodo = function( result ) {
    sql.query("Select * from todos", function(err, res) {
        if (err) {
            console.log("error: ", err)
        } else {
            console.log('todos : ', res);
            result(null, res)
        }
    })
}

Todo.createTodo = function (newTodo, result) {
    //console.log(newTodo);
    sql.query("INSERT INTO todos set ?", newTodo, function(err, res) {
        if(err) {
            console.log("error: ", err)
        } else {
            result(null, res.insertId);
        }
    })
}

Todo.updateById = function(id, todo, result) {
    sql.query("UPDATE todos SET todo = ?, des = ? WHERE id = ?", [todo.todo, todo.des, id] , function(err, res) {
        if (err) {
            console.log("error: " , err)
        } else {
            result(null, res);
        }
    })
}

Todo.remove = function(id, result) {
    sql.query("DELETE FROM todos WHERE id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

Todo.getTodoById = function(todoId, result) {
    sql.query("Select todo FROM todos WHERE id = ?", todoId, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

module.exports = Todo;