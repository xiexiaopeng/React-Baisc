import React, { Component } from "react";
interface IProps {}
interface IState {}
class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="home">home</div>;
  }
}
export default Home;
