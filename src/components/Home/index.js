import './home.css';
import Task from "../Task";
import {useState, useEffect} from "react";

const Home = () => {

    const [listTask,setListTask] = useState([]);

    const [newTask,setNewTask] = useState("");


    useEffect(() =>{
        
        const data = localStorage.getItem("listTask");

        data && setListTask(JSON.parse(data));

    },[])

    const handleValueInput = (e) => {

       setNewTask(e.target.value);
    }

    const handleSubmitform = (e) => {

        e.preventDefault();

        const data = {task:newTask,id:Math.random(1111,9999)};

        listTask.push(data);

        //Save Data to localStorage
        localStorage.setItem("listTask",JSON.stringify(listTask));

        setNewTask("");
    }

    const handleTogleStatus = async  (item) => {

        //Toogle done value (true || false)
        item.done = !item.done;

        const newList = listTask.filter(list => list.id !== item.id);

        item.done ? newList.unshift(item) :  newList.push(item);

        await setListTask(newList);

        //Save Data to localStorage
        localStorage.setItem("listTask",JSON.stringify(listTask));
    }

    const handleDeleteAll = () => {

        localStorage.clear();

        setListTask([]);
    }

    return(

        <div className="Home">
            <div className="container">
                <h2><b>Printf-Task</b></h2>
                <div className="AddItemContent">
                    <form method="POST" className="frmPost" onSubmit={(e) => handleSubmitform(e)}>
                        <input type="text" placeholder="New Task..." required value={newTask} onChange = {(e) => handleValueInput(e)} />
                        <button type="submit">Save</button>
                    </form>
                </div>
                <h3 className="titleToogle">Done</h3>
                <Task  listTask ={listTask.filter((list) => { return list.done})} title="Done List" handleTogleStatus ={handleTogleStatus}/>
                <h3 className="titleToogle">To Do</h3>
                <Task  listTask ={listTask.filter((list) => { return !list.done})} title="To do List" handleTogleStatus ={handleTogleStatus}/>

                <div className="footer">
                    <div className="container" style={{padding:'unset'}}>
                    <button onClick={() => handleDeleteAll()}>Delete All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;