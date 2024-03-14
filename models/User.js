import {Schema, model} from "mongoose"

const UserSchema = new Schema({
    avatar: {type: String, default: ""},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});