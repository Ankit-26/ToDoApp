import { Button, Modal } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { toDoType, toDoTypeColor } from '../constants';
import { addToDO, editToDO } from '../redux/toDoAction';
import "./addToDoModal.css";


function AddToDoModal({ selectedToDo, open, onClose, editable }) {
    const appDispatch = useDispatch()
    const [toDoData, setToDoData] = useState(null)

    useEffect(() => {
        if (editable && selectedToDo && Object.keys(selectedToDo).length) {
            setToDoData({ ...selectedToDo })
        }
    }, [open])
    return (
        <Modal
            open={open}
            onClose={onClose}
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
        >
            <div className='modal-container'>
                <div className='modal-title-header'>
                    <div className='modal-header-left'><Button onClick={() => onClose()} color="primary">Cancel</Button></div>
                    <div className='modal-header-right'><Button onClick={() => {
                        editable ? onClickEditToDo() : onClickAddToDo()

                    }}>{editable ? "Edit todo" : "Add todo"}</Button></div>
                </div>
                <div className='modal-title'>
                    <label htmlFor="title">Title</label><br />
                    <input type={"text"} id="title"
                        onChange={(e) => setToDoData({ ...toDoData, title: e.target.value })
                        }
                        value={toDoData?.title || ""}
                    ></input>
                </div>
                <div className='modal-desc'>
                    <label htmlFor="desc">Description</label><br />
                    <textarea type="text" id='desc'
                        onChange={(e) => setToDoData({ ...toDoData, desc: e.target.value })
                        }
                        value={toDoData?.desc || ""}
                    ></textarea>
                </div>
                <div className='modal-footer'>
                    <h1>Tags</h1>
                    <div className='todotype-list' style={{
                        display: 'flex', marginTop: '-16px'
                    }}>
                        {toDoType.map((element) => {
                            return (<div className='toDo-type' style={{ margin: '0 5px', cursor: 'pointer' }} key={uuidv4()}
                                onClick={() => {
                                    if (toDoData.toDoTypes.includes(element)) {
                                        return;
                                    }
                                    setToDoData({ ...toDoData, toDoTypes: toDoData?.toDoTypes?.length > 0 ? [...toDoData?.toDoTypes, element] : [element] });
                                }}
                            >
                                <div className='circle' style={{ backgroundColor: toDoTypeColor[element] }}></div>
                                <div className='type'>{element}</div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Modal >
    )

    function onClickAddToDo() {
        const tempToDo = { ...toDoData };
        tempToDo.completed = false;
        tempToDo.id = uuidv4();
        appDispatch(addToDO(tempToDo))
        setToDoData(null)
        onClose()
    }

    function onClickEditToDo() {
        const tempToDo = { ...toDoData };
        appDispatch(editToDO(tempToDo))
        setToDoData(null)
        onClose()
    }

}

export default AddToDoModal