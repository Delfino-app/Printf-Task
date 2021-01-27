
const Task = ({listTask, handleTogleStatus}) => {

    return (

        <div className="TaskLis">
            {!listTask && <div className="emptyList">Your List is empty</div>}
            {listTask && listTask.map((list) => (
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