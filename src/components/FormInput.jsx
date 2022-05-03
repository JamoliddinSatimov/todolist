import React, {useContext,useState} from 'react'
import { DataContext } from './DataProvider'

export default function FormInput() {
    const [todos,setTodos] = useContext(DataContext)
    const [todoName, setTodoName] = useState("")
    
    
    const addTodo = (e)=>{
        e.preventDefault();
        let filterTodos = todos.filter(item => item.name!==todoName)
        
        setTodos([{name:todoName,isComplate:false}, ...filterTodos])
        setTodoName("")
    }
    
  return (
    <form autoComplete='off' onSubmit={addTodo}  className="input-group">
            <input
              type="text"
              className="form-control py-3 rounded border bg-body shadow"
              required name='todos' id='todos'
              placeholder="typing..."
              value={todoName}
              onChange={eve=>setTodoName(eve.target.value.toLowerCase())}   
            />
            <button
              className="btn btn-success px-4  rounded shadow"
              type="submit"
            >
              Add
            </button>
            
          </form>
  )
}
