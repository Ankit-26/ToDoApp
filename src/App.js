import { Provider } from "react-redux";
import LeftNavigation from "./components/LeftNavigation";
import TaskViewWindow from "./components/TaskViewWindow";
import store from "./redux/Store";
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LeftNavigation />
        <TaskViewWindow />
      </Provider>
    </div>

  );
}
