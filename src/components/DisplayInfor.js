import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowUser: !this.state.isShowUser
        })
    }


    render() {
        const { listUsers } = this.props;
        // console.log(listUsers)
        return (
            <div>
                {/* <div>My name is {name}</div>
                <div>I'm {age} years old</div> */}

                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowUser === false ? "Show list users: " : "Hire list users: "}
                    </span>
                </div>

                <div>
                    {listUsers.map((user) => {
                        return (
                            <div>
                                {this.state.isShowUser &&
                                    <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                        <div>My name is {user.name}</div>
                                        <div>I'm {user.age} years old</div>
                                        <hr></hr>
                                    </div>
                                }

                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }

}

export default DisplayInfor;