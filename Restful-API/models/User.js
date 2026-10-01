// models/User.js

let users = [
    { id: 1, name: 'Juan' },
    { id: 2, name: 'Alex' }
];

// Funciones del "modelo"
exports.getAllUsers = () => {
    return users;
};

exports.getUserById = (id) => {
    return users.find(user => user.id === id);
};

exports.createUser = (name) => {
    const newUser = {
        id: users.length + 1,
        name
    };
    users.push(newUser);
    return newUser;
};

exports.updateUser = (id, name) => {
    const user = users.find(user => user.id === id);
    if (!user) return null;

    user.name = name;
    return user;
};

exports.deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
};
