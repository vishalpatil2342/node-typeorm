import { Router } from "express";
import { createUsers, deleteUser, getUserByid, getUsers, updateUsers } from "../controllers/user.controller";

const router = Router();

router.route("/")
  .get(getUsers)
  .post(createUsers);

  
router.route("/:id")
  .get(getUserByid)
  .put(updateUsers)
  .delete(deleteUser);



export default router;