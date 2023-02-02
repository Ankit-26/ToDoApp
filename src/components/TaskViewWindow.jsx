import { Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddToDoModal from './AddToDoModal';
import "./taskViewWindow.css";
import ToDoCard from './ToDoCard';

function TaskViewWindow() {
    const toDoList = useSelector((state) => state?.toDoReducer?.toDos);
    const hideDoneTask = useSelector((state) => state?.toDoReducer?.hideDoneTask);
    const [openModal, setOpenModal] = useState(false);
    const [selectedToDO, setSelectedToDo] = useState(null);

    return (<>
        {open && <AddToDoModal
            open={openModal}
            onClose={() => { setOpenModal(false), setSelectedToDo(null) }}
            selectedToDo={selectedToDO}
            editable={selectedToDO && Object.keys(selectedToDO).length > 0 ? true : false}
        />}
        <div className='right-toDo-panel'>
            <h1 onClick={() => setOpenModal(true)}><Tooltip title="Add ToDo" placement='top' ><AddIcon fontSize='large' /></Tooltip></h1>
            <div className='toDoCards-container'>
                {toDoList.map((toDo) => {
                    if (hideDoneTask) {
                        if (!toDo.completed) {
                            return <ToDoCard
                                toDo={toDo}
                                key={toDo.id}
                                setSelectedToDo={setSelectedToDo}
                                onClickEdit={() => setOpenModal(true)}
                            />
                        }
                        return
                    }
                    return <ToDoCard
                        toDo={toDo}
                        key={toDo.id}
                        setSelectedToDo={setSelectedToDo}
                        onClickEdit={() => setOpenModal(true)}
                    />

                })}
            </div>

        </div></>
    )
}

export default TaskViewWindow