import React, { Component } from "react";
interface IProps {
  history: any;
}
interface IState {}

class Index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  jump = () => {
    console.log(
      "%c [ navigate ]-15",
      "font-size:13px; background:pink; color:#bf2c9f;",
      this.props.history.push("/home")
    );
    // navigate("/home");
  };
  render() {
    return (
      <div className="Index">
        react-baisc
        <button onClick={this.jump}>跳转home</button>
      </div>
    );
  }
}
export default Index;
