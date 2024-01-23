import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name must be larger than 2 charactes"],
        maxLength: [50, "Name must be lesset than 50 charactes"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },
    phone: {
        type: String,
        match: [/^\d{10}$/, "Invalid phone number"],
        required: [true, "Phone number is required"],
    },
    size: {
        type: String,
        enum: ["A3", "A4", "A5", "other"], 
        default: "A4", 
        required: [true, "Size is required"],
    },
    message: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema)

export default Booking;