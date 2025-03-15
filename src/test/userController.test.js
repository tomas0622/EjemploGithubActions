const request = require('supertest');

const app = require('../server');
const userService = require("../userService");
const e = require('express');

test ("Debe obtener los usuarios(usuarios)", async () => {
    userService.addUser("Pepito Perez");
    const res = await request(app).get("/api/users");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].nombre).toBe("Pepito Perez");
});