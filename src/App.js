import logo from './logo.svg';
import './App.css';
import {Header ,Sum} from './components/header/Header'
import {Arrays} from './components/header/array/Arrays'
import {Forms} from './components/formsTables/Forms'
import {Parent} from './components/form/Parent'
import {FoodParent} from './components/FoodsApp/FoodParent'
import {Frame} from './components/Frame/Frame'
import {ClassOne} from './components/ClassApp/ClassOne'
import {Chet} from './components/chetBox/Chet'

function App() {
  return <>
  <Chet></Chet>
  <Header/>
  <Sum/>
  <Arrays/>
  <Forms/>

  <Parent/>
  <FoodParent/>
  <Frame> </Frame>
  <ClassOne></ClassOne>
  
  </>






















  //(
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
