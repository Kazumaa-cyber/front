import './App.css';
import View from "./components/view/index"
import store from "./components/store/index"
import { Provider } from 'react-redux'

function App() {
  return (
    <div >
      <Provider store={store}>
        <View />
      </Provider>
    </div>
  );
}

export default App;
