import React from "react";

function Panel(props)
{
    return <div className="container">
        <div id="logo-main">
                ReelFusion
        </div>
        <div className = "Header">
            <ul>
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Browse</a></li>
                <li><a href="#">Home</a></li>
                <li>
                    <input
                        className="searchPanel"
                        placeholder="Search By Title, Director or Genre"
                        onChange={props.onSearchTextChange}
                    />
                </li>
            </ul>
        </div>
    </div>
}

export default Panel;