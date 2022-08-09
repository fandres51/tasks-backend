const express = require('express');
const UserService = require('../services/user.service');

const router = express.Router();
const service = new UserService();

router.use(express.json());

router.get('/', async (req, res, next) => {
    try {
        const users = await service.getAll();
        res.json(users);
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await service.findOne(id);
        res.json(user);
    } catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const newUser = await service.create(body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updated = await service.update(id, body);
        res.json(updated);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.status(201).json({ id });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
