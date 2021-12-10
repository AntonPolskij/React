import logo from './logo.svg';
import './App.scss';
import Message from './components/Message/Message'

const myName='Anton';
const helloMsg='Hello, my name is ';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name={myName} msg={helloMsg} />
      </header>
    </div>
  );
}

export default App;
