// class component

// function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";
//Dinh nghia 1 class
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Dung", age: "16" },
            { id: 2, name: "Bach Khoa", age: "55" },
            { id: 3, name: "Chu Du", age: "83" },
        ]
    }

    //JSX
    render() {

        return (
            <div>
                <UserInfor></UserInfor>
                <hr></hr>
                <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>

            </div>

        )

    }
}

export default MyComponent;
