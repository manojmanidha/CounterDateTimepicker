import './App.css';
import Countdown from './Countdown';

function App() {
  return (
    <div className="App">
      <div className='main'>
      <h1>Countdown <span style={{color:'hsl(330, 100%, 56%)'}}>Timer</span> </h1>
      <div className='date'>
       <Countdown/>
      </div>
      </div>
    </div>
  );
}

export default App;
