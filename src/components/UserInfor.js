import React from "react";

class UserInfor extends React.Component {

    state = {
        name: 'dung',
        address: 'ha noi',
        age: 23
    };


    handleClick(event) {
        console.log(">> click me my button");
        console.log("My name is ", this.state.name)
        this.setState({
            name: 'Bro code',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and my address is {this.state.address}, i'm {this.state.age} year old ad <br></br>
                <button onClick={(event) => this.handleClick(event)}>click me 1</button>
                <button onMouseOver={this.handleOnMouseOver}>Click me 2</button>

                <form>
                    <input type='text' onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <button>Click here</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;