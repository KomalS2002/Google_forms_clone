import React from "react";
import Options from "./options";
import Paragraph from "./paragraph";
import "./question.css"

const Question = () => {
    return (
        <div className="question_main">
            <div className="question_title_wrapper">
                <input type="text" className="question_title" style={{fontSize:"1.2rem"}} value={"Question"}/>
                <select style={{padding:".4rem 1rem"}}>
                    <option value="multiple choice">Multiple Choice</option>
                    <option value="paragraph">Paragraph</option>
                </select>
            </div>
            {/* <Options/> */}
            {/* <Paragraph/> */}
        </div>
    );
};

export default Question;
