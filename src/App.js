import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import {Welcome} from './components/Welcome';
import { Hello } from './components/Hello';
import { Message } from './components/Message';
import { FunctionMessage } from './components/FunctionMessage';
import Counter from './components/Counter';
import { ClickHandler } from './components/ClickHandler';
import { UserGreetings } from './components/UserGreetings';
import { ParentComponent } from './components/ParentComponent';
import { NamedList } from './components/NamedList';
import { StyleSheets } from './components/StyleSheets';
import { Inline } from './components/Inline';
import './myAppStyles.css'
import styles from './myAppStyles.module.css'

function App() {
  return (
    <div className="App">
        {/* <p>
         Welcome to CGG 
        </p> */}
        {/* <Greet name="Shiv" designation="TL">
          <p>This is children prop</p>
          </Greet>
        <Greet name="React" designation="SSD">
          <button>Active</button>
          </Greet>
        <Greet name="Sanjeeva" designation="SD"/>
        {/* <Welcome name="Sanjeeva" designation="TSD"/>
        <Welcome name="Sanjeeva" designation="SSD">
        <p>This is children</p>
        </Welcome>
        <Welcome name="Sanjeeva" designation="SD"/> */}
        {/* <Hello/> */}
        {/* <Message/>
        <FunctionMessage/> */} 
        {/* <Counter/> */}
        {/* <ClickHandler/> */}
        {/* <UserGreetings/> */}
        {/* <ParentComponent/>
        <NamedList/> */}
        {/* <StyleSheets primary={false}/> */}
        <Inline/> 
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        </div>
  );
}

export default App;
