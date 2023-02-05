import React, {useState} from "react";
import Question from "../components/question";
import "./form.css";
const Form = () => {
  const [formTitle,setFormTitle] = useState("Untitled Form");
  const [description,setDescription] = useState("Form description");
  const [question, setQuestion] = useState([]);



  const handleChange =(e) =>{
    setFormTitle(e.target.value);
  }

  const makeEmpty = (e) =>{
    setFormTitle("")
  }

  const descChange = (e) => {
    setDescription(e.target.value);
  }

  const descEmpty = (e) => {
    setDescription("")
  }

  const addQuestion = (e)=> {
    setQuestion(question.concat(<Question/>))
  }
  
    return (
        <>
            <div className="form_body">
                <div className="form_heading">
                    <input
                        type="text"
                        className="title_heading"
                        value={formTitle} onChange={handleChange} onClick={makeEmpty}
                    />
                    <input type="text" value={description} onChange={descChange} onClick={descEmpty} />
                </div>
                <Question />
                {question}
                

                <button style={{ marginTop: "1rem" }} className="send_btn" onClick={addQuestion}>
                    Add
                </button>
                
            </div>
        </>
    );
};

export default Form;
