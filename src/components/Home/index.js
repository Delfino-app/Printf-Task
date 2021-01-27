import './home.css';
import Task from "../Task";

const Home = () => {

    return(

        <div className="Home">
            <div className="container">
                <h2><b>Things To Do</b></h2>
                <div className="AddItemContent">
                    <form method="POST" className="frmPost">
                        <input type="text" placeholder="New Task..." />
                        <button type="submit">Save</button>
                    </form>
                </div>
                <Task />
            </div>
        </div>
    )
}

export default Home;