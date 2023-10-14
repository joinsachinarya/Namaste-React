import { Component } from "react";

class ProfileClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testState: false,
            testState2: 0
        }
        console.log("class component profile : constructor");
    }

    componentDidMount() {
        console.log("class component profile :componentDidMount");
    }
    componentDidUpdate() {
        console.log("class component profile :componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("class component profile :componentWillUnmount (left the page) ");
    }

    render() {
        console.log("class component profile :render");
        return (
            <h2>
                Class component : Profile
                <p>Topic: {this.props.topic}</p>
                <i>testState: {this.state.testState}</i>
                <button onClick={() => this.setState({ testState: !testState })}>Update State</button>
            </h2>
        )
    }

}
export default ProfileClassComponent;