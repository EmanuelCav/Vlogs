import { Schema, model } from "mongoose";

const vlogsSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 80,
        minlength: 1
    },
    description: {
        type: String,
        trim: true,
        maxlength: 200,
        minlength: 1
    },
    information: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    images: [],
    likes: [{
        type: Number
    }],
    userId: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('Vlog', vlogsSchema)