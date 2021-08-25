import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    maxPeople: {
        type: Number,
        default: 1,
        validate: value => {
            if (value <= 0) {
                throw new Error(
                    'Minimum 1 person'
                )
            }
        }
    },
    bestPrice: {
        type: Boolean
    }
})

const Room = mongoose.model('Room', RoomSchema)

export default Room