import { FC } from "react";
import { Provider } from "react-redux";
import store from "./store";
import RouterConfig from "./router";

const App: FC = () => {
  return (
    <Provider store={store}>
      <RouterConfig />
    </Provider>
  );
};

export default App;
