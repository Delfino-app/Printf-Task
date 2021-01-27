import {useState} from "react";

const Task = () => {

    const [listTask,setListTask] = useState([
        {task:'Learn React Components and Hoocks',done:false,id:1},
        {task:'Make a To do App Witch React',done:false,id:2}
    ]);

    const handleTogleStatus = (item) => {

        item.done = !item.done;

        const newList = listTask.filter(list => list.id !== item.id);

        newList.push(item);

        newList.reverse();

        setListTask(newList);
    }

    return (

        <div className="TaskLis">
            {!listTask && <div className="emptyList">Your List is empty</div>}
            {listTask && listTask.map((list) => (
                <div className={list.done ? 'list taskDone' : 'list'} key={list.id} onClick={() => handleTogleStatus(list)}>
                    <h3>{list.task}</h3>
                    <div className="ActionContent">
                       <span>
                           
                       </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Task;