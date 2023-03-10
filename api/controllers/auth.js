import User from "../models/User.js"
import bcryptjs from "bcryptjs"
import { createError } from "../utils/error.js"
import jwt from "jsonwebtoken"


export const register = async (req, res, next) => {

    try {
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(req.body.password, salt)
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hash,

        });
        await newUser.save();
        res.status(200).send("User has been created successfully")

    } catch (err) {
        next(err);

    }

};


export const login = async (req, res, next) => {

    try {
        const user = await User.findOne({ userName: req.body.userName });
        if (!user) return next(createError(404, "User not found!"));

        const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password);
        if (!isPasswordCorrect) 
            return next(createError(401, "Wrong Password!"));
        
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_Secretekey)
        const { password, isAdmin, ...otherDetails } = user._doc;

        res
        .cookie("access_token",token, {
            httpOnly:true
        })
        .status(200).json({ ...otherDetails })


    } catch (err) {
        next(err);

    }

};