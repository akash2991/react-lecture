// import logo from './logo.svg';
import { useState } from 'react';


export function TodoList() {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('')

  function handleOnClickSubmit() {
    const todoObject = {
      taskName: newTodo,
      tempEditedValue: newTodo, // this key is required to hold the edited value
      isEditable: false,
      isDeleted: false,
      isCompleted: false,
      id: Date.now(),
      undoStack: [],
      redoStack:[]
    }
    const updatedTodoList = [...todoList, todoObject]

    setNewTodo('')
    setTodoList(updatedTodoList)
  }

  function handleOnUndo(todo) {
    const lastElement = todo.undoStack.pop()
    todo.redoStack.push(todo.taskName)
    todo.taskName = lastElement
    todo.tempEditedValue = lastElement
    setTodoList([...todoList])
  }

  function handleOnRedo(todo) {
    const lastElement = todo.redoStack.pop()
    todo.undoStack.push(todo.taskName)
    todo.taskName = lastElement
    todo.tempEditedValue = lastElement
    setTodoList([...todoList])
  }

  function handleOnClickEdit(todo) {
    todo.isEditable = true
    setTodoList([...todoList])
  }

  function handleOnClickFinishSubmitting(todo) {
    todo.isEditable = false
    todo.undoStack.push(todo.taskName)
    todo.taskName = todo.tempEditedValue
    setTodoList([...todoList])
  }

  function handleOnClickEditTodo(event, todo) {
    todo.tempEditedValue = event.target.value
    todo.redoStack = []
    setTodoList([...todoList])
  }

  function handleOnClickCancelEdit(todo) {
    todo.isEditable = false
    todo.tempEditedValue = todo.taskName
    setTodoList([...todoList])
  }

  function handleOnClickDelete(todo) {
    todo.isDeleted = true
    setTodoList([...todoList])
  }

  function handleOnClickRestore(todo) {
    todo.isDeleted = false
    setTodoList([...todoList])
  }

  function handleOnClickComplete(todo) {
    todo.isCompleted = true
    setTodoList([...todoList])
  }

  return (
    <div >
      {todoList.map(todo => (
        todo.isDeleted ?
          null : (
          <div
            key={todo.id}
            style={{ display: 'flex', justifyContent: 'center', marginBottom:10 }}
          >
            {todo.isEditable ? (
              <input value={todo.tempEditedValue} type="text" onChange={(event) => handleOnClickEditTodo(event, todo)} />
            ) : (
              <p style={{textDecoration:todo.isCompleted ? "line-through" : "normal", color:todo.isCompleted ?"red":"green"}} >{todo.taskName}</p>
            )}
            {!todo.isCompleted && !todo.isEditable && <input type="button" value="edit" onClick={() => handleOnClickEdit(todo)} />}
            {todo.isEditable && <input type="button" value="done" onClick={() => handleOnClickFinishSubmitting(todo)} />}
            {todo.isEditable && <input type="button" value="cancel edit" onClick={() => handleOnClickCancelEdit(todo)} />}
            {!!todo.undoStack.length && <input type="button" value="undo" onClick={() => handleOnUndo(todo)} />}
            {!!todo.redoStack.length && <input type="button" value="redo" onClick={() => handleOnRedo(todo)} />}
            {!todo.isEditable && <input type="button" value="delete" onClick={() => handleOnClickDelete(todo)} />}
            {!todo.isEditable && <input type="button" value="complete" onClick={() => handleOnClickComplete(todo)} />}
          </div>
      )))}
        
      
      <div style={{marginTop:40, marginBottom:40}} >
        <input value={newTodo} type="text" placeholder="enter todo" onChange={e=>setNewTodo(e.target.value)}/>
        <input type="button" value="submit" onClick={handleOnClickSubmit} />
      </div>



        {todoList.map(todo => (
          !todo.isDeleted ?
          null : (
          <div
            key={todo.id}
            style={{ display: 'flex', justifyContent: 'center', marginBottom:10 }}
          >
            <p style={{textDecoration:todo.isCompleted ? "line-through" : "normal", color:todo.isCompleted ?"red":"green"}} >{todo.taskName}</p>
            <input type="button" value="restore" onClick={() => handleOnClickRestore(todo)} />
          </div>
      )))}
    </div>
  );
}







