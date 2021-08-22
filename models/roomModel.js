import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    number: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true
    },
    booked: {
        type: Boolean
    }
})

const Room = mongoose.model('Room', RoomSchema)

export default Room