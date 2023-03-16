// class component

// function component

import React from "react";
//Dinh nghia 1 class
class MyComponent extends React.Component {

    state = {
        name: 'dung',
        address: 'ha noi',
        age: 23
    };

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and my address is {this.state.address}, i'm {this.state.age} year old <br></br>
                {Math.random()}
            </div>

        )

    }
}

export default MyComponent;
