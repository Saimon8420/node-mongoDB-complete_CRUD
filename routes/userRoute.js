const express = require('express');
const { getUser, postUser, updateUser, deleteUser, getUserById } = require('../collections/userCollections');
const userRouter = express.Router();

userRouter.get("/user", getUser);

userRouter.get("/user/:id", getUserById);

userRouter.post("/user", postUser);

userRouter.put("/user/:id", updateUser);

userRouter.delete("/user/:id", deleteUser);

module.exports = userRouter;