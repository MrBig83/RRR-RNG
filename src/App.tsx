
import './App.css'
import InputBox from './assets/Components/InputBox/InputBox';
import RNGBox from './assets/Components/RNGBox/RNGBox';
import ResultBox from './assets/Components/ResultBox/ResultBox';

function App() {

  
  

  return (
    <div className='page'>
      <div className='borderLine'>
        <h1 className='titleHeader'>R.R.R - R.N.G</h1>
      </div>
        <div className='mainContent'>
          <InputBox />
          <RNGBox />
          <ResultBox />
        </div>
    </div>
  )
}

export default App
