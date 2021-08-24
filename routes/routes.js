import express from 'express'
import { catchErrors } from '../helpers.js'
import {
    addRoom,
    getRoom,
    getRooms,
    updateRoom
} from '../controllers/roomControllers.js'

const router = express.Router()

router.post('/api/rooms', catchErrors(addRoom))

router.get('/api/rooms', catchErrors(getRooms))

router.get('/api/room/:id', catchErrors(getRoom))

router.patch('/api/room/:id', catchErrors(updateRoom))

export default router