import express from 'express'
import { catchErrors } from '../helpers.js'
import {
    addRoom,
    getRooms
} from '../controllers/roomControllers.js'

const router = express.Router()

router.post('/api/rooms', catchErrors(addRoom))

router.get('/api/rooms', catchErrors(getRooms))

export default router