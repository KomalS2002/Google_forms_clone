import React, { useState } from "react";
import Option from "./option";

const Options = () => {
    const [optionsarr, setOptionsarr] = useState([<Option />]);
    const handleClick = () => {
        setOptionsarr(optionsarr.concat(<Option />));
    };
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {optionsarr}

            <div
                style={{
                    paddingLeft: "1rem",
                    marginTop: ".5rem",
                    textDecoration: "underline",
                    color: "blue",
                }}
                onClick={handleClick}
            >
                Add Option{" "}
            </div>
        </div>
    );
};

export default Options;
