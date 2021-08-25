import React from 'react'
import Layout from '../components/Navigation'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import RoomsPage from '../pages/RoomsPage'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'



const App = () => {
    return (
      <Layout>
        
        <Switch>
            <Route path='/' element={<HomePage />} />
            <Route path='/' element={<RoomsPage />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Switch>
    </Layout>
    )
}

export default App
