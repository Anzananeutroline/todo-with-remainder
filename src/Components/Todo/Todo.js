import React, {useContext} from "react";
import { StyledOverlay, StyledDiv,StyledLabel,StyledInput,StyledButton,StyledNotifyDiv} from "../styles/Common.styled";
import "./Todo.css";
import TodoContext from "../../TodoContext";



const Todo = () => {
  // const [more, setMore] = useState(null);
  // const [input, setInput] = useState("");
  // const [items, setItems] = useState([]);
  // const [edits, setEdits] = useState(false);
  // const [editedText, setEditedText] = useState("");
  // const [notifyStatus, setNotifyStatus] = useState(false);
  //  const [notifyDone, setNotifyDone] = useState(false);

  // const moreHandler = (id) =>{
  
  // if(more===id)
  // {
  //   setMore(null);
  //   return false;
  // }
  // setMore(id)
  // }
  // const inputHandler = (e) => {
  //   setInput(e.target.value);
  // };

  // const addItems = () => {
  //   if (!input) {
  //   } else {
  //     setItems([...items, input]);
  //     setInput("");
    
  //   }
  // };

  // const deleteItem = (id) => {
  //   const updatedItems = items.filter((element, index) => {
  //     return index !== id;
  //   });

  //   setItems(updatedItems);
  // };

  // const saveEdits = () => {
  //   setEdits(false);
  // };

  // const openEdits = () => {
  //   setEdits(true);
  //   setMore(false);
  // };

  // const editedTextHandler = (e) => {
  //   setEditedText(e.target.value);
  // };

  // const openNotify = () => {
  //   setMore(false);
  //   setNotifyStatus(true);
  // }

  // const closeNotify = () => {
  //   setNotifyStatus(false);
  //   setNotifyDone(true);
  //   setMore(false);
  // }

  // const onNotifyDone = () => {
  //   setNotifyDone(false);
  // }

  const { more } = useContext(TodoContext);
  const { input } = useContext(TodoContext);
  const [items] = useContext(TodoContext);
  console.log(items)
  const { edits } = useContext(TodoContext);
  const { editedText } = useContext(TodoContext);
  const { notifyStatus } = useContext(TodoContext);
  const { notifyDone } = useContext(TodoContext);
  const { moreHandler} = useContext(TodoContext);
  const {inputHandler } = useContext(TodoContext);
  const {addItems } = useContext(TodoContext);
  const { deleteItem} = useContext(TodoContext);
  const {saveEdits } = useContext(TodoContext);
  const { openEdits} = useContext(TodoContext);
  const {editedTextHandler } = useContext(TodoContext);
  const { openNotify} = useContext(TodoContext);
  const {closeNotify } = useContext(TodoContext);
  const { onNotifyDone} = useContext(TodoContext);
  
  return (
    <div className="wrapper">
      <StyledOverlay style={{ display: edits ? "flex" : "none" }}>
        <StyledDiv>
          <StyledLabel htmlFor="text">Edit todo</StyledLabel>
          <StyledInput
            type="text"
            name="text"
            id=""
            placeholder="Enter text here"
            onChange={editedTextHandler}
            value={editedText}
          />
        </StyledDiv>
        <StyledButton onClick={saveEdits}>Save changes</StyledButton>
      </StyledOverlay>

      <StyledOverlay style = {{display:notifyStatus?"flex":"none"}}>
 <StyledDiv>
          <StyledLabel htmlFor="date">Enter Date</StyledLabel>
          <StyledInput
            type="date"
            name="date"
            id="date"
          />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel htmlFor="time">Enter time</StyledLabel>
          <StyledInput
            type="time"
            name="time"
            id="time"
          />
        </StyledDiv>
        <StyledButton onClick={closeNotify}>Save changes</StyledButton>
      </StyledOverlay>


      <StyledOverlay style={{ display: notifyDone ? "flex" : "none" }}>
        <StyledNotifyDiv>
         <div> Notification saved successfully</div>
          <StyledButton onClick={onNotifyDone}>OK</StyledButton>
        </StyledNotifyDiv>
      </StyledOverlay> 
      <div className="header">Todo list</div>
      <div className="input">
        <input
          type="text"
          id="input"
          value={input}
          placeholder="Add a new task"
          onChange={inputHandler}
        />
        <label htmlFor="input" onClick={addItems}>
          <i className="fa-solid fa-circle-plus"></i>
        </label>
      </div>

      {/* <TodoMenu items={items} /> */}

      {items.map((item, index) => {
        
        return (
          <div className="todolist" key={index}>
            <div className="todo-front">
              <input type="checkbox" name="" id="" onChange={ () => {}}/>
              <h2>{item}</h2>
            </div>
            <div className="todo-back">
              {" "}
              <i
                className="fa-solid fa-ellipsis-vertical"
                onClick={()=>{moreHandler(index)}}
              ></i>
             

              {index===more ?
             <>
              <div
                  className="more"
                  // style={{ display: more ? "block" : "none" }}
                >
             <div onClick={openEdits}>
              Edit <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div onClick = {openNotify}>
              Notify <i className="fa-solid fa-bell"></i>
            </div>
            <div onClick={() => deleteItem(index)}>
              Delete <i className="fa-solid fa-trash"></i>
            </div>
            </div></>:""
              }
            </div>
          </div>
          
        );
      })}
    </div>
  );
};

export default Todo;
