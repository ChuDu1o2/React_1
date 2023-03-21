// class component

// function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";
//Dinh nghia 1 class
class MyComponent extends React.Component {

    //JSX
    render() {

        return (
            <div>
                <UserInfor></UserInfor>
                <hr></hr>
                <DisplayInfor name="Do Tien Dung" age="24"></DisplayInfor>
                <DisplayInfor name="Chu Du" age={34}></DisplayInfor>
            </div>

        )

    }
}

export default MyComponent;
