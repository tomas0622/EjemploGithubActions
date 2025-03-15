const userService = require('../userService')

test ("Debe agregar un usuario", () => {
    const user = userService.addUser("que tin y que guau");
    expect(user.name).toBe("que tin y que guau");
    expect(userService.getUsers().length).toBe(1);
}
)