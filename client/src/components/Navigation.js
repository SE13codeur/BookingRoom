import React from 'react'
import { Layout, Menu } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import { Link } from 'react-router-dom'

const contentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3rem 3rem',
    justifyContent: 'center'
}

const Navigation = ({ children }) => {
    return (
        <Layout>
            
            <Header>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
                    <Menu.Item key='1'>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Link to='/'>Rooms</Link>
                    </Menu.Item>
                    <Menu.Item key='3'>
                        <Link to='/'>Shop</Link>
                    </Menu.Item>
                    <Menu.Item key='4'>
                        <Link to='/'>Contact</Link>
                    </Menu.Item>
                </Menu>
            </Header>

            <Content style={contentStyle} children={children}></Content>
            <Footer style={{ textAlign: 'center' }}>SRK ©2021 by SEB</Footer>

        </Layout>
    )
}

export default Navigation
