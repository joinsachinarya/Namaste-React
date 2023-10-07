import { Component } from "react";

class ProfileClassComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state.myState = {
    //     //     name: "Sachin",
    //     //     age: 23
    //     // }
    // }
    render() {
        return (
            <h2>
                Class component : Profile
                <p>Topic: {this.props.topic}</p>
                <i>Day: {""}</i>
            </h2>
        )
    }

}
export default ProfileClassComponent;