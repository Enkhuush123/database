import express from "express";
import { createUser } from "../resolver/users/create-users.js";
import { getUsers } from "../resolver/users/get-users.js";
import { updateUser } from "../resolver/users/uptade-users.js";
import { deleteUser } from "../resolver/users/delete-users.js";
import { getUsersbyId } from "../resolver/users/get-users-by-id.js";
import { signup } from "../resolver/users/signup.js";
import { signin } from "../resolver/users/signin.js";

export const user = express.Router();

user.get("/refresh", getUsers);
user.post("/sign-up", signup);
user.post("/sign-in", signin);
user.put("/", updateUser);
user.delete("/", deleteUser);
