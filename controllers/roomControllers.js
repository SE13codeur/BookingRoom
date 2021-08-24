import RoomModel from '../models/roomModel.js'

// add room
export const addRoom = async (req, res) => {
    const room = new RoomModel(req.body)
    await room.save()
    res.send(room)
}

// read all rooms
export const getRooms = async (_, res) => {
    const rooms = await RoomModel.find({ })
    res.send(rooms)
}

// read one room
export const getRoom = async (req, res) => {
    const room = await RoomModel.findById({ _id: req.params.id })
    res.send(room)
}

// update
export const updateRoom = async (req, res) => {
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body)
    await room.save()
    res.send(room)
}