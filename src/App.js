import './App.css';
import MyHeader from './MyHeader';
import Counter from './counter';
import Countainer from './Container';

function App() {
  let name = 'coding groot';
  const style = {
    App: { backgroundColor: 'white' },
  }
  const CounterProps = {
    initialValue: 0,
    a: 1,
  }
  return (
    <Countainer>
      <div style={style.App}>
        <MyHeader/>
        <h1>하핫 {name}와 함께하는 React 공부</h1>
        <b id="bold_text">굵은 글씨</b>
        <Counter {...CounterProps} />
      </div>
    </Countainer>
  );
}

export default App;
