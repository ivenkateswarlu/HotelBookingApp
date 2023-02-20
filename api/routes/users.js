import express from "express"
import { createError } from "../utils/error.js";
import { 
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
} from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next) => {
//     res.send("Hello user has been verified")

// });

// router.get("/checkuser/:id", verifyUser, (req,res,next) => {
//     res.send("Hello user has been verified, you can delete an account")

// });

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next) => {
//     res.send("Hello admin you are loggedin, you can delete all account")

// });

//update

router.put("/:id",verifyUser, updateUser);

//Delete

router.delete("/:id",verifyUser, deleteUser);

//Get

router.get("/:id",verifyUser, getUser);

//Getall

router.get("/", verifyAdmin, getAllUsers);



export default router

