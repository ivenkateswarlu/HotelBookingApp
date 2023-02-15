import express from "express"

const router = express.Router();

router.get("/",(req,res) => {
    res.send("This is from auth default page");

});

router.get("/register",(req,res) => {
    res.send("This is from auth register page");

});

export default router