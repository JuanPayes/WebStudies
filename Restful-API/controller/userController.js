const userService = require('../services/userServices');

exports.getUsers = (req, res) => {
    const users = userService.getAll();
    res.json(users);
};

exports.getUsersByID = (req, res) =>{
    const user = userService.getID(parseInt(req.params.id));
    if (!user) {
        return res.status(404).send(' NO user was found');
    }
    res.json(user);
};

exports.createUser = (req, res) => {
    const newUser = userService.create(req.body.name);
    res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
    const user = userService.update(parseInt(req.params.id), req.body.name);
    if (!user) {
        return res.status(404).send('NO user was found');
    }
    res.json(user);
};

exports.deleteUser = (req, res) => {
    userService.delete(parseInt(req.params.id));
    res.status(204).send();
};