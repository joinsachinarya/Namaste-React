import { Component } from "react";

class ProfileClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 0,
            day2: 0
        }
    }
    render() {
        return (
            <h2>
                Class component : Profile
                <p>Topic: {this.props.topic}</p>
                <i>Day: {this.state.day}</i>
                {/* <i>{this.state.day2}</i> */}
                <button onClick={() => this.setState({ day: 1 })}>Change day</button>
            </h2>
        )
    }

}
export default ProfileClassComponent;