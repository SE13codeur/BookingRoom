import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import RoomCard from './RoomCard'

const Room = () => {
    const { id } = useParams()
    const [room, setRoom] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await window.fetch(`/api/rooms/${id}`)
            const json = await data.json()
            // console.log(json)
            setRoom(json)
        }
        fetchData()
    }, [id])

    return room ? (
        <div>

            <RoomCard room={room} />
            
        </div>
    ) : null
}

export default Room
