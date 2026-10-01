// services/userService.js
const userModel = require('../models/User');

exports.getAll = () => {
    return userModel.getAllUsers();
};

exports.getID = (id) => {
    return userModel.getUserById(id);
};

exports.create = (name) => {
    return userModel.createUser(name);
};

exports.update = (id, name) => {
    return userModel.updateUser(id, name);
};

exports.delete = (id) => {
    userModel.deleteUser(id);
};
