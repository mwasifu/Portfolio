import React from 'react'
import Todo from './Todo'

const List = ({todo, setTodo}) => {
    return (
        <div>
            {todo.map((todoItem) => <Todo setTodo={setTodo} todo={todo} todoItem={todoItem} text={todoItem.text} key={todoItem.id} />)}
        </div>
    )
}

export default List
