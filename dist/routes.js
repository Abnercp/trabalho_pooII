"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = require("./services/CreateUser");
function helloWorld(req, res) {
    var user = (0, CreateUser_1.createUser)({
        name: 'Abner Pereira',
        email: 'aabnerpereira@gmail.com',
        password: '1234'
    });
    return res.json({ message: "Hello World" });
}
exports.helloWorld = helloWorld;
