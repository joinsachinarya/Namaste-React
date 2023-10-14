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
            <div className=" font-medium text-xl p-6" >
                Class component : Profile
                <p>Topic: {this.props.topic}</p>
                <button onClick={() => this.setState({ testState: !testState })} className="border bg-slate-100 rounded  p-2">Update State</button>
            </div >
        )
    }

}
export default ProfileClassComponent;