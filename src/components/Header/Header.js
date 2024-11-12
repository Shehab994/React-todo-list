import React, { useEffect, useState } from 'react'
import './Header.css'
export default function Header() {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            let now = new Date();
            setDateTime(`${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`)
        }, 1000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div className='header'>
            <h1>Todo List</h1>
            <h3>{dateTime}</h3>
        </div>
    )
}
