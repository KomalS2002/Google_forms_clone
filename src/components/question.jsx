import React from "react";
import Options from "./options";
import Paragraph from "./paragraph";

const Question = () => {
    return (
        <div>
            <div>
                <input type="text" />
                <select>
                    <option value="multiple choice">Multiple Choice</option>
                    <option value="paragraph">Paragraph</option>
                </select>
            </div>
            <Options/>
            <Paragraph/>
        </div>
    );
};

export default Question;
