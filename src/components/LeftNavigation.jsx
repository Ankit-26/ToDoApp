import { Checkbox } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { toDoType, toDoTypeColor } from '../constants';
import { hideDoneToDOs, setToDOList } from '../redux/toDoAction';
import "./leftNavigation.css";

function LeftNavigation() {
    const appDispatch = useDispatch()
    const hideDoneTask = useSelector((state) => state?.toDoReducer?.hideDoneTask);
    useEffect(() => {
        async function gettoDoList() {
            let fetchRes = await fetch("https://jsonplaceholder.typicode.com/todos")
            let listData = await fetchRes.json();
            // appDispatch(setToDOList(listData))
            appDispatch(setToDOList(listData.map((toDo) => {
                return { ...toDo, toDoTypes: ["other"], desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry" }
            })))
        }
        gettoDoList()
    }, [])

    return (
        <div className="left-panel">
            <h1>todo</h1>
            <div className='todotype-list'>
                {toDoType.map((element) => {
                    return (<div className='toDo-type' key={uuidv4()}>
                        <div className='circle' style={{ backgroundColor: toDoTypeColor[element] }}></div>
                        <div className='type'>{element}</div>
                    </div>
                    )
                })}
            </div>
            <div className='checkBox-hide'>
                <Checkbox size='small'
                    onChange={() => appDispatch(hideDoneToDOs())}
                    checked={hideDoneTask}
                />
                <div>Hide Done task</div>
            </div>
            <img src={"https://media.istockphoto.com/id/1160018579/vector/young-woman-filling-long-paper-note-with-to-do-list-and-giant-pencil-planning-project.jpg?s=612x612&w=0&k=20&c=__qOzQd6Ybwj5BPPFW2PLueLAddIMjRysNYF-xRZQdo="} alt="" />
        </div>
    )
}

export default LeftNavigation;