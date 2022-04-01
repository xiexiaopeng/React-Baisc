import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./index.less";
const Index: FC<any> = () => {
  // TODO：路由跳转有问题，待修复
  const history = useNavigate();
  const jump = () => {
    history("/home");
  };
  return (
    <div className="index">
      <p className="index-p">react-baisc</p>
      <button onClick={jump}>跳转home</button>
    </div>
  );
};
export default Index;
