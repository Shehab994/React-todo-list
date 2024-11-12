import React from 'react'
import './List.css'
export default function List({ item, handaleRemove, id, handaleCheck, checked }) {
    return (
        <li className='list'>
            <i className={`bi ${checked ? 'bi-x' : 'bi-check2'}`} onClick={() => handaleCheck(id)}></i>
            <span className={checked ? 'checked' : ''}>{item.text}</span>
            <button onClick={() => handaleRemove(id)}>Rmv</button>
        </li>
    )
}
