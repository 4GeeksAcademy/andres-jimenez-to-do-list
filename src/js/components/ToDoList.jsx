import React, { useState } from "react";

const ToDoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [ToDoList, setToDoList] = useState([]);
    return (
        <div className="container">
            <h1>To Do List</h1>
            <ul className="list-group">
                <li>
                    <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue}
                        onKeyDown={(event) => { 
                            if (event.key === "Enter") {
                                setToDoList(ToDoList.concat([inputValue]));
                                setInputValue("");
                            }
                        }}
                        placeholder="No tasks, add a task"
                    ></input></li>
                {ToDoList.map((item, index) =>
                    <li>
                        {item}{""}
                        <i class="fa-solid fa-circle-xmark" onClick={() =>
                            setToDoList(ToDoList.filter(
                                (ToDoList, actualIndex) =>
                                    index != actualIndex))
                        }></i>
                    </li>
                )}

            </ul>
            <div>7-Tasks Left</div>
        </div>
    )
}

export default ToDoList;