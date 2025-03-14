const users = []

const addUser = (nombre) => {
    const user = { id: users.length + 1, nombre }
    users.push(user)
    return user
}

const getUsers = () => {
    return users
}

module.exports = {
    addUser,
    getUsers
}