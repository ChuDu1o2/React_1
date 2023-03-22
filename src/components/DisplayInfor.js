import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props;
        console.log(listUsers)
        return (
            <div>
                {/* <div>My name is {name}</div>
                <div>I'm {age} years old</div> */}
                {listUsers.map((user) => {
                    console.log(user);
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>I'm {user.age} years old</div>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>

        )
    }

}

export default DisplayInfor;