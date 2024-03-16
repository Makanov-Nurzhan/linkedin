import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';

function Feed() {
    return (
        <div className='feed'>
            <div className="input_container">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type='text' />
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">

                </div>
            </div>

        </div>
    )
}

export default Feed