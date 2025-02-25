import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from "./components/TodoList";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
