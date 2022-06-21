import { createContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [more, setMore] = useState(null);
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [edits, setEdits] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [notifyStatus, setNotifyStatus] = useState(false);
const [notifyDone, setNotifyDone] = useState(false);
    
const moreHandler = (id) =>{
  
  if(more===id)
  {
    setMore(null);
    return false;
  }
  setMore(id)
  }
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addItems = () => {
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((element, index) => {
      return index !== id;
    });

    setItems(updatedItems);
  };

  const saveEdits = () => {
    setEdits(false);
  };

  const openEdits = () => {
    setEdits(true);
    setMore(false);
  };

  const editedTextHandler = (e) => {
    setEditedText(e.target.value);
  };

  const openNotify = () => {
    setMore(false);
    setNotifyStatus(true);
  }

  const closeNotify = () => {
    setNotifyStatus(false);
    setNotifyDone(true);
    setMore(false);
  }

  const onNotifyDone = () => {
    setNotifyDone(false);
  }
    return (
        <TodoContext.Provider value = {{more,items,input,edits,editedText,notifyStatus,notifyDone,moreHandler,inputHandler,addItems,deleteItem,saveEdits,openEdits,editedTextHandler,openNotify,closeNotify,onNotifyDone}}>
            {children}
       </TodoContext.Provider>
    )
}
export default TodoContext;