import React, { useState } from "react";

const Paragraph = () => {
    const [val,setVal] = useState("paragraph")
    return (
        <input
            type="text"
            style={{
                border: "none",
                outline: "none",
                padding: "0rem 1rem",
                color: "rgb(57, 57, 57)",
            }}
            value={val}
            onChange={(e)=>setVal(e.target.value)}
        />
    );
};

export default Paragraph;
