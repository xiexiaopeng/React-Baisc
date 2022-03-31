import { Provider } from "react-redux";
import store from "./store";
import RouterConfig from "./router";

const App = () => {
  return (
    <Provider store={store}>
      <RouterConfig />
    </Provider>
  );
};

export default App;
