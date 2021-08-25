import { Badge, Card } from 'antd'
import React from 'react'
const { Meta } = Card

const RoomCard = ({ room }) => {
    return (
        <div
            style={{
                width: 300,
                margin: '1rem'
            }}
        >

            <Badge count='Best Price'
            >
                <Card
                    cover={
                        <img
                            style={{
                                width: '300px',
                                height: '350px',
                                objectFit: 'cover'
                            }}
                            alt={room.roomName}
                            src={`https://source.unsplash.com/random/${Math.ceil(
                                Math.random() * 1000 + 300
                            )}x350/?room`}
                        />
                    }
                >
                    <Meta
                        title={room.roomName.toUpperCase()}
                        description={`Max People: ${room.maxPeople}`}
                    />
                </Card>
            </Badge>
            
        </div>     
    )
}

export default RoomCard