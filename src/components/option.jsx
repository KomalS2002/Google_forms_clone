import React, { useState } from "react";

const Option = () => {
    const [val, setVal] = useState("Option");
    return (
        <input
            type="text"
            style={{ margin: ".2rem 1rem", border: "none", outline: "none" }}
            value={val}
            onChange={(e) => setVal(e.target.value)}
        />
    );
};

export default Option;
