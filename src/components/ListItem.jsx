import React, {useContext, useState} from 'react'
import { DataContext } from './DataProvider'
import "./ListItem.css"

export default function ListItem({checkComplate,todo,id}) {

  const [todos, setTodos] = useContext(DataContext)
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)

  function deleteBtn(id){
    let newList  = [...todos]
    newList.splice(id,1)
    setTodos(newList)
  }

  const handleOnEdit = ()=>{
    setOnEdit(true)
    setEditValue(todo.name)
  }

  function handleEditValue(id) {
    let newTodo = [...todos]
    newTodo.forEach((item,index)=>{
      if (index===id) {
        item.name=editValue
      }
    })
    setTodos(newTodo)
  }

  const handleSave = (id)=>{
    setOnEdit(false)
    if (editValue) {
      handleEditValue(id)
    }else{
      setEditValue(todo.name)
    }
  }

  if (onEdit) {
    return (
      <li className="border-bottom d-flex justify-content-between">
          <div className="d-flex align-items-center">
              <input type="text" id={"editValue"} name={"editValue"} value={editValue} onChange={(e)=>setEditValue(e.target.value)}  />

          </div>
          <div>
            <button type="button" onClick={()=>handleSave(id)} className="btn btn-warning mx-1">
              save
            </button>
            <button onClick={()=>deleteBtn(id)} type="button" className="btn btn-danger">
              delete
            </button>
          </div>
        </li>
    )
  } else {
    return (
      <li className="border-bottom d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <label htmlFor={id} className={todo.isComplate ? "d-flex align-items-center active" : "d-flex align-items-center" }>
              <input type="checkbox" id={id} checked={todo.isComplate} onChange={()=>checkComplate(id)}  className="form-check-input mt-0 mx-2" />
              <span>{todo.name}</span>
            </label>
          </div>
          <div>
            <button type="button" onClick={handleOnEdit} disabled={todo.isComplate} className="btn btn-warning mx-1">
              edit
            </button>
            <button onClick={()=>deleteBtn(id)} type="button" className="btn btn-danger">
              delete
            </button>
          </div>
        </li>
    )
  }

  
}
