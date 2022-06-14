import React,{useState} from 'react';
import "./Todo.css";

const Todo = () => {
    const [more, setMore] = useState(false);
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [edits, setEdits] = useState(false);
    const [editedText, setEditedText] = useState("");

    const moreHandler = () => setMore(more => !more);
    const inputHandler = (e) => {
        setInput(e.target.value);
      
    }

    const addItems = () => {
    if (!input) {
        
    } else {
        setItems([...items, input]);
        setInput("")
        console.log(items)
    }
    }

    
    const deleteItem = (id) => {
        const updatedItems = items.filter((element, index) => {
            return index !== id;
        });

        setItems(updatedItems);
    }

    const saveEdits = () => {
        setEdits(false);
    }

    const openEdits = () => {
        setEdits(true);
    }

    const editedTextHandler = e => {
        setEditedText(e.target.value);
    }
  return (
      <div className='wrapper' >
          <div id="overlay" style = {{display:edits?"flex":"none"}} >
              <div>
                  <label htmlFor="text">Edit todo</label>
                  <input type="text" name="text" id="" placeholder='Enter text here' onChange={editedTextHandler} value={ editedText} />
              </div>
              <button onClick = {saveEdits}>Save changes</button>
          </div>
          <div className="header">Todo list</div>
          <div className="input">
              <input type="text" id="input" value={input} placeholder='Add a new task' onChange={inputHandler}  />
             <label htmlFor="input"  onClick = {addItems}><i className="fa-solid fa-circle-plus"></i></label>
          </div>
          {
              items.map((item,index) => {
                  return (
                       <div className="todolist" key = {index}>
              <div className='todo-front'>
                  <input type="checkbox" name="" id="" />
                              <h2>{ item}</h2>
              </div>
              <div className = "todo-back"> <i className="fa-solid fa-ellipsis-vertical" onClick = {moreHandler}></i>
                 <div className="more" style = {{display: more?"block":"none"}}>
                      <div onClick = {openEdits}>Edit <i className="fa-solid fa-pen-to-square"></i></div>
                      <div>Notify <i className="fa-solid fa-bell"></i></div>
                                  <div onClick={() => deleteItem(index)}>Delete <i className="fa-solid fa-trash"></i></div>
              </div>
              </div>
               
          </div>
                  )
              })
          }

                </div>
  )
}

export default Todo;