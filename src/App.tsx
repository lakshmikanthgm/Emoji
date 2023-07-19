import './App.css';
import Emojis from './components/Emojis/Emojis';
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <h2 className='emoji-header'>Emojis</h2>
      <Emojis></Emojis>
    </Provider>
  );
}

export default App;