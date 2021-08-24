import express from 'express'
import { catchErrors } from '../helpers.js'
import {
    addRoom,
    getRoom,
    getRooms,
    updateRoom,
    deleteRoom
} from '../controllers/roomControllers.js'

// Path with ES module
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const router = express.Router()

router.post('/api/rooms', catchErrors(addRoom))

router.get('/api/rooms', catchErrors(getRooms))

router.get('/api/rooms/:id', catchErrors(getRoom))

router.patch('/api/rooms/:id', catchErrors(updateRoom))

router.delete('/api/rooms/:id', catchErrors(deleteRoom))

// if wrong path => referral to index.html
router.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

export default router