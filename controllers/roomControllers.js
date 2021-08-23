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