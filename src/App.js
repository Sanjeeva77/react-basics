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
// import styles from './myAppStyles.module.css'
import { Form } from './components/Form';
import { FormDetail } from './components/FormDetail';
import { FragmentDemo } from './components/FragmentDemo';
import { Table } from './components/Table';
import { FragmentList } from './components/FragmentList';
import LifeCycleA from './components/LifeCycleA';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import { FocusInput } from './components/FocusInput';
import FRParentinput from './components/FRParentinput';
import ErrorBoundary from './components/ErrorBoundary';
import { Hero } from './components/Hero';
import { PortalDemo } from './components/PortalDemo';
import { RefDemo } from './components/RefDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';


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
        {/* <Inline/>  */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Form/> */}
        {/* <FormDetail/> */}
        {/* <FragmentDemo/> */}
        {/* <Table/> */}
        {/* <FragmentList/> */}
        {/* <LifeCycleA/> */}
        {/* <PureComp/> */}
        {/* <ParentComp/> */}
         {/* <refDemo/> */}
        {/* <FocusInput/> */}
        {/* <FRParentinput/> */}
        {/* <ErrorBoundary>
          <Hero heroName='Batman'/>
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName='Spiderman'/>
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName='Joker'/>
        </ErrorBoundary> */}
        {/* <PortalDemo/> */}
        {/* <ClickCounter/>
        <HoverCounter/> */}
        {/* <ClickCounter2/>
        <HoverCounter2/>
        <User render={(isLoggedIn)=>isLoggedIn?'CGG':'Guest'}/> */}
        {/* <CounterTwo>
        {(count,incrementCount)=>
          (<ClickCounter2 count={count}
          incrementCount={incrementCount}/>
          )}
        </CounterTwo>

        <CounterTwo>
        {(count,incrementCount)=>
          (<HoverCounter2 count={count}
          incrementCount={incrementCount}/>
          )}
        </CounterTwo> */}
        {/* 2. */}
        <UserProvider value='CGG'> 
          <ComponentC/>
        </UserProvider>
        
        </div>
  );
}

export default App;
