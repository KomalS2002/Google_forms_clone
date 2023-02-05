import React from "react";
import Question from "../components/question";
import "./form.css";
const Form = () => {
  // const [title,setTitle]
    return (
        <>
            <div className="form_body">
                <div className="form_heading">
                    <input
                        type="text"
                        className="title_heading"
                        value={"Untitled form"}
                    />
                    <input type="text" value={"Form description"} />
                </div>
                <Question />
                <button style={{ marginTop: "1rem" }} className="send_btn">
                    Add
                </button>
            </div>
        </>
    );
};

export default Form;
