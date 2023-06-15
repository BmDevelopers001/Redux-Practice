import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { Incre,Decre } from './action';
function App() {
  const count = useSelector((state)=>{
    console.log(state);
    return state.InDe;
  });
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => { dispatch(Incre()) }}>Increment</button>
      <h1>count:{count.count}</h1>
      <button onClick={()=>{dispatch(Decre())}}>Decrement</button>
    </div>
  );
}

export default App;
