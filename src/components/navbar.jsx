import React from "react";
import "./navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar_top">
                <div className="navbar_left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Google_Forms_logo_%282014-2020%29.svg"
                        alt="logo"
                        height={40}
                        width={40}
                    />

                    <h2>Title</h2>
                </div>
                <div className="navbar_right">
                    <button className="send_btn">Send</button>
                    <img
                        src="/avatar.svg"
                        alt="profile"
                        height={40}
                        width={40}
                    />
                </div>
            </div>
            <div className="navbar_bottom">
                <button>Questions</button>
                <button>Settings</button>
            </div>
        </nav>
    );
};

export default Navbar;
