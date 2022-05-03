import React,{useContext} from "react";
import ListItem from "./ListItem";
import {DataContext} from "./DataProvider"

export default function List() {
    const [todos, setTodos] = useContext(DataContext)

    const swichComplate = id =>{
        let newList = [...todos]
        newList.forEach((todo,index)=>{
          if (index===id) {
            todo.isComplate=!todo.isComplate
          }
        })
        setTodos(newList)
        console.log(todos);
    }
    
  return (
    <ul className="list-unstyled mt-2">
        {
            todos.map((todo, index)=>{
                return <ListItem todo={todo} key={index} id={index} checkComplate = {swichComplate}/>
            })
        }
    </ul>
  );
}
