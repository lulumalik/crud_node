'use strict';

exports.routes = function(app) {
    var todoList = require('./controller/todoController');

    app.route('/list_all_todo')
        .get(todoList.list_all_todo)
        .post(todoList.create_a_todo)

    app.route('/list_todo/:todoId')
        .get(todoList.read_a_todo)
    
    app.route('/update_a_todo/:todoId')
        .put(todoList.update_a_todo)
        .delete(todoList.delete_a_todo)
}