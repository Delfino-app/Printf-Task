
const Task = ({listTask, title, handleTogleStatus}) => {

    return (

        <div className="TaskLis">
            {listTask.length <= 0 && <div className="emptyList">Your {title} is empty</div>}
            {listTask.length > 0 && listTask.map((list) => (
                <div className={list.done ? 'list taskDone' : 'list'} key={list.id} onClick={() => handleTogleStatus(list)}>
                    <h3>{list.task}</h3>
                    <div className="ActionContent">
                       <span>{list.done ? '✔' : ''}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Task;