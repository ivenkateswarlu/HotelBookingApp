import express from "express"
//import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
    createHotel,
    updatedHotel,
    deleteHotel,
    getHotel,
    getAllHotel
} from "../controllers/hotel.js"



const router = express.Router();

//create
router.post("/", createHotel);

//update

router.put("/:id",updatedHotel);

//Delete

router.delete("/:id",deleteHotel);

//Get

router.get("/:id",getHotel);

//Getall

router.get("/", getAllHotel);



export default router