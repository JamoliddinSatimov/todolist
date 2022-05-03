import React, {useContext,useEffect,useState} from "react";
import { DataContext } from "./DataProvider";

export default function Footer() {

  const [todos, setTodos] = useContext(DataContext)
  const [newList, setNewList] = useState(todos)
  const [checkValue, setCheckValue] = useState(false)

  useEffect(()=>{
    let filteredList = todos.filter(item=>!item.isComplate)
    let filterChecked = todos.filter(item=>item.isComplate)
    if (filterChecked.length===todos.length&&todos.length>0) {
      setCheckValue(true)
    }else{
      setCheckValue(false)
    }
    setNewList(filteredList)
  },[todos])

  const handleChechbox = ()=>{
    let newList = [...todos]
    newList.forEach(item=>{
      item.isComplate=!checkValue
    })
    setCheckValue(!checkValue)
    setTodos(newList)
  }

  const deleteList = ()=>{
    let newList = todos.filter(item=>!item.isComplate)
    setTodos(newList)
  }


  

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between w-50 align-items-center">
        <div>
        <label htmlFor="" className={"d-flex align-items-center"}>
            <input type="checkbox"  className="form-check-input mt-0 mx-2" checked={checkValue} onChange={()=>handleChechbox()}  />
            <span>All</span>
          </label>
        </div>
        <p className="m-0 fw-bold">You have {newList?.length} to do</p>
      </div>
      <button type="button" onClick={deleteList} className="btn btn-danger">
        delete
      </button>
    </div>
  );
}
