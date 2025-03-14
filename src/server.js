const express =require('express');
const userController = require("./userController")

const app = express();
app.use(express.json());

app.get("api/users", userController.getUsers)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;