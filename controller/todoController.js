'use strict';

var Todo = require('../model/todo');

exports.list_all_todo = function(req, res) {
    Todo.getAllTodo(function (err, todo) {
        if (err) 
            res.send(err);
        
        res.send(todo)
        
    })
}

exports.create_a_todo = function(req, res) {
    var new_todo = new Todo(req.body);

    //handle null error

    if (!new_todo.todo || !new_todo.des) {
        res.status(400).send({
            error: true,
            message: 'Isi todo dengan benar'
        })
    } else {
        Todo.createTodo(new_todo, function ( err, todo ) {
            if (err) 
                res.send(err);
            Todo.getAllTodo(function (err, todo) {
                if (err)
                    res.send(err);
                res.send(todo)
            })
        })
    }
}

exports.update_a_todo = function (req, res) {
    Todo.updateById(req.params.todoId, new Todo(req.body), function(err, todo) {
        if(err)
            res.send(err);
        // kita kasih feedback semua todo
        Todo.getAllTodo(function (err, todo) {
            if (err)
                res.send(err);
            res.send(todo)
        })
    })
}

exports.delete_a_todo = function(req, res) {
    Todo.remove(req.params.todoId, function(err, todo) {
        if (err)
            res.send(err);
        
            res.json({
                message: 'Todo successfully deleted',
                deleted_id: req.params.todoId
            })
    })
}

exports.read_a_todo = function(req, res) {
    Todo.getTodoById(req.params.todoId, function(err, todo) {
        if(err)
            res.send(err);
        res.json(todo);
    })
}