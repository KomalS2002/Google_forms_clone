import React, {useState, useEffect} from "react";
import Options from "./options";
import Paragraph from "./paragraph";
import "./question.css"

const Question = () => {
    const [ansType, setAnsType] = useState("Select question type") 
    const [paragraph, setParagraph] = useState(false);
    const [multiChoice, setMultiChoice] = useState(false);
    const [Question, setQuestion] = useState("Question") 

    useEffect(() => {
        ansType ==="paragraph"
        ? setParagraph(true)
        : setParagraph(false);

        ansType === "multiple choice"
        ? setMultiChoice(true)
        : setMultiChoice(false);

        
    },[ansType]);

    const handleChange = (e) => {
        setAnsType(e.target.vale);
    }

    const questionInput = (e) => {
        setQuestion(e.target.value);
    }

    const makeEmpty = (e) => {
        setQuestion("")
    }

    return (
        <div className="question_main">
            <div className="question_title_wrapper">
                <input type="text" className="question_title" style={{fontSize:"1.2rem"}} value={Question} onClick={makeEmpty} onChange={questionInput}/>
                <select style={{padding:".4rem 1rem"}} className="text_options" value={ansType} onChange={handleChange}>
                    <option value="multiple choice">Multiple Choice</option>
                    <option value="paragraph">Paragraph</option>
                </select>
            </div>
            {multiChoice && <Options/>}
        {paragraph && <Paragraph/>}
        </div>
    );
};

export default Question;
