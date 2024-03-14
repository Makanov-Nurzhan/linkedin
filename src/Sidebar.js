import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src='https://img.freepik.com/free-vector/bokeh-defocused-background_23-2148497833.jpg' alt='' />
                <Avatar className='sidebar_avatar' />
                <h2>Nurzhan Makanov</h2>
                <h4>makanov76@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>2,586</p>
                </div>
                <div className="sidebar_stat">
                    <p>View on post</p>
                    <p className='sidebar_statNumber'>2,459</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar