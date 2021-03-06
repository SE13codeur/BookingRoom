import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import RoomCard from './RoomCard'

const Rooms = () => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await window.fetch(`/api/rooms`)
            const json = await data.json()
            setRooms(json)
        }
        fetchData()
    }, [])

    return (
        <>
            {rooms.map(room => (
                <Link
                    key={room._id}
                    to={room._id}

                >
                    <RoomCard room={room} />
                </Link>
            ))}
            
        </>
    )
}

export default Rooms