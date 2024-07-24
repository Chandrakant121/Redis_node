const express = require('express')
const router = express.Router()
const client = require('../config/redis')
const Todo = require('../models/todo.models')

// Redis 

router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create(req.body);

        const todos = await Todo.find().lean().exec();

        client.set("todos", JSON.stringify(todos));

        return res.status(200).send(todo);
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        client.get('todos', async (err, fetchTodos) => {
            if (err) {
                console.error(err);
                // Handle error
                return res.status(500).send('Internal Server Error');
            }

            if (fetchTodos) {
                const todos = JSON.parse(fetchTodos);
                return res.status(200).send({ todos, redis: true });
            } else {
                try {
                    const todos = await Todo.find().lean().exec();
                    client.set("todos", JSON.stringify(todos));
                    return res.status(200).send({ todos, redis: false });
                } catch (err) {
                    return res.status(500).send(err.message);
                }
            }
        });
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        client.get(`todos.${req.params.id}`, async (err, fetchTodos) => {
            if (err) {
                console.error(err);
                // Handle error
                return res.status(500).send('Internal Server Error');
            }
            if (fetchTodos) {
                const todo = JSON.parse(fetchTodos);
                return res.status(200).send({ todo, redis: true });
            }
            else {
                try {
                    const todos = await Todo.findById(req.params.id).lean().exec()
                    client.set(`todos.${req.params.id}`, JSON.stringify(todos));
                    return res.status(200).send({ todos, redis: false });
                }
                catch (err) {
                    return res.status(500).send(err.message);
                }
            }
        });
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()

        const todos = await Todo.find().lean().exec()

        // update single todo
        client.set(`todos.${req.params.id}`, JSON.stringify(todos))

        // update all todo with single
        client.set("todos", JSON.stringify(todos))

        return res.status(200).send(todo)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id, { new: true }).lean().exec()

        // fetch all todos
        const todos = await Todo.find().lean().exec()

        // del single todo
        client.del(`todos.${req.params.id}`)

        // set all todo agin
        client.set("todos", JSON.stringify(todos))

        return res.status(200).send(todo)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

module.exports = router