import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'


function Sidebar() {
    const user = useSelector(selectUser)



    const recentItem = (topic) => {
        return (
            <div className="sidebar_recentItem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img
                    src="https://images.unsplash.com/photo-1549778399-f94fd24d4697?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=''
                />
                <Avatar src="{user.photoUrl}" className="sidebar_avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

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
                {recentItem('reactjs')}
                {recentItem('nextjs')}
                {recentItem('softwareengineering')}
                {recentItem('firebase')}
                {recentItem('python')}
                {recentItem('django')}
            </div>
        </div>
    )
}

export default Sidebar