import React from "react";
import Option from "./option";

const Options = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Option />
            <Option />
            <Option />
            <div
                style={{
                    paddingLeft: "1rem",
                    marginTop: ".5rem",
                    textDecoration: "underline",
                    color: "blue",
                }}
            >
                Add Option{" "}
            </div>
        </div>
    );
};

export default Options;
