import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Rooms from '../components/Rooms'
import Room from '../components/Room'

const RoomsPage = () => {
    return (
        <Switch>
            <Route path='/' element={<Rooms />} />
            <Route path=':id' element={<Room />} />
        </Switch>
    )
}

export default RoomsPage
