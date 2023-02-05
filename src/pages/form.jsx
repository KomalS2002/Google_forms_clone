import React from "react";
import Question from "../components/question";

const Form = () => {
    return (
        <>
            <div>
                <input type="text" />
                <input type="text" />
            </div>
            <Question />
            <button>Add</button>
        </>
    );
};

export default Form;
