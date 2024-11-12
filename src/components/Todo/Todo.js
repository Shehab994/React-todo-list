import React, { useState } from 'react'
import Header from '../Header/Header'
import InputBox from '../InputBox/InputBox'
import './Todo.css'
import List from '../List/List'

export default function Todo() {

    const [getData, setData] = useState(() => {
        const saveData = localStorage.getItem('todoData');

        return saveData ? JSON.parse(saveData) : [];
    })
    localStorage.setItem('todoData', JSON.stringify(getData))


    const handaleInputValue = (value) => {

        if (!value) return;
        const findMatch = getData.find(item => item.text === value);
        if (findMatch) return;

        setData([...getData, { id: value, text: value, checked: false }])
    }
    const handaleRemove = (key) => {
        getData.splice(key, 1);
        setData([...getData])
    }

    const handaleCheck = (id) => {
        getData[id].checked = !getData[id].checked;
        setData([...getData])
    }

    return (
        <>
            <Header />
            <InputBox handaleInputValue={handaleInputValue} />
            <ul>
                {
                    getData.map((item, key) => {
                        return <List
                            key={key} item={item}
                            handaleRemove={handaleRemove}
                            id={key}
                            handaleCheck={handaleCheck}
                            checked={item.checked}
                        />
                    })
                }
            </ul>
        </>
    )
}
