import { Checkbox, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { toDoTypeColor } from '../constants';
import { deleteToDO, markToDoDone } from '../redux/toDoAction';
import "./toDoCard.css";


function ToDoCard({ toDo, setSelectedToDo, onClickEdit }) {
    const appDispatch = useDispatch()

    return (
        <div className='toDoCard'>
            <div className='title-header'>
                <div className='title-header-left'>{toDo?.completed ? <s>{toDo?.title || ""}</s> : (toDo?.title || "")}</div>
                <div className='title-header-right'>
                    <div className='delete-toDo'
                        onClick={() => appDispatch(deleteToDO(toDo?.id))}
                    ><Tooltip title="Delete ToDO" placement='top' ><DeleteIcon fontSize='medium' /></Tooltip></div>
                    <div className='edit-toDo'><Tooltip
                        title="Edit ToDO"
                        placement='top'
                        onClick={() => {
                            setSelectedToDo(toDo)
                            onClickEdit()
                        }}
                    ><EditIcon fontSize='medium' /></Tooltip></div>
                </div>

            </div>
            <p className='toDo-body'>{toDo?.completed ? <s>{toDo.desc || ""}</s> : (toDo.desc || "")}</p>
            <div className='toDo-footer'>
                <div className='todotype-list-card'>
                    {toDo?.toDoTypes?.map((element) => {
                        return (<div className='toDo-type' key={uuidv4()}>
                            <div className='circle' style={{ backgroundColor: toDoTypeColor[element] }}></div>
                        </div>
                        )
                    })}
                </div>
                < div className='toDo-markas-done'>
                    <Tooltip title="Mark as Done" placement='bottom' ><Checkbox size='small' checked={toDo?.completed} onChange={() => { appDispatch(markToDoDone(toDo?.id)) }} /></Tooltip>
                </div>
            </div>
        </div>
    )

}

export default ToDoCard