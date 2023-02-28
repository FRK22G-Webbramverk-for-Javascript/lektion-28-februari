import './TodoItem.css';

function TodoItem() {
    const todo = 'Köp kaffe';
    
    return (
        <li className='todo-item'>{ todo }</li>
    )
}

export default TodoItem;