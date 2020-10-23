import React from 'react'

export default function Task({taskName, time}) {
    return (
        <div className ="task">
             <h1>Даалгавар: {taskName}</h1>
             <h1>Хугацаа: {time}</h1>
        </div>
    )
}
