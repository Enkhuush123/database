import express from "express";
import { createUser } from "../resolver/users/create-users.js";
import { getUsers } from "../resolver/users/get-users.js";
import { updateUser } from "../resolver/users/uptade-users.js";
import { deleteUser } from "../resolver/users/delete-users.js";
import { getUsersbyId } from "../resolver/users/get-users-by-id.js";

export const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUsersbyId);

router.post("/", createUser);

router.put("/", updateUser);

router.delete("/", deleteUser);
