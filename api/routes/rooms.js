import express from "express"
import { createRoom,updatedRoom,deleteRoom,getRoom,getAllRooms } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);

//update

router.put("/:id",verifyAdmin, updatedRoom);

//Delete

router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);

//Get

router.get("/:id",getRoom);

//Getall

router.get("/", getAllRooms);



export default router