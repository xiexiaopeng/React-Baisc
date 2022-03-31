import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Index: FC<any> = () => {
  // TODO：路由跳转有问题，待修复
  const history = useNavigate();
  const jump = () => {
    history("/home");
  };
  return (
    <div className="Index">
      react-baisc
      <button onClick={jump}>跳转home</button>
    </div>
  );
};
export default Index;
