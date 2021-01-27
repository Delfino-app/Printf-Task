import './home.css';
import Task from "../Task";
import {useState} from "react";

const Home = () => {

    const [listTask,setListTask] = useState([
        {task:'Learn React Components and Hoocks',done:false,id:1},
        {task:'Make a To do App Witch React',done:false,id:2},
        {task:'work in Sig-Copenfl Project Today',done:false,id:3}
    ]);

    const [newTask,setNewTask] = useState("");
    const [idValue,setIdValue] = useState(4);

    const handleValueInput = (e) => {

       setNewTask(e.target.value);
    }

    const handleSubmitform = (e) => {

        e.preventDefault();

        const data = {task:newTask,id:idValue}

        setListTask([...listTask,data]);

        setNewTask("");

        const newId = idValue + 1;
        setIdValue(newId);
    }

    const handleTogleStatus = (item) => {

        //Toogle done value (true || false)
        item.done = !item.done;

        const newList = listTask.filter(list => list.id !== item.id);

        if(item.done){

            //Put a task done in the top
            newList.unshift(item);
        }
        else{

            newList.push(item);
        }

        setListTask(newList);
    }

    return(

        <div className="Home">
            <div className="container">
                <h2><b>Things To Do</b></h2>
                <div className="AddItemContent">
                    <form method="POST" className="frmPost" onSubmit={(e) => handleSubmitform(e)}>
                        <input type="text" placeholder="New Task..." required value={newTask} onChange = {(e) => handleValueInput(e)} />
                        <button type="submit">Save</button>
                    </form>
                </div>
                <Task  listTask ={listTask}  handleTogleStatus ={handleTogleStatus}/>
            </div>
        </div>
    )
}

export default Home;