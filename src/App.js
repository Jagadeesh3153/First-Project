import logo from './logo.svg';
// import './App.css';
import ClassConstructor from './component/ClassConstructor'
import Componentlifecycle from './component/Componentlifecycle';
import Propexample from './component/Propexample';
import UnControlledComponent from './component/UnControlledComponent';
import ControlledComponent from './component/ControlledComponent';
import ListExample from './component/ListExample';
import Header from './component/Header';
import TableExample from './component/TableExample';
import ContextExample from './component/ContextExample';
import ContextData from './ContextStore';
import React from 'react';
import HooksExample from './HooksExample';
import ContextInhooks from './ContextInhooks';
import UserDetails from './ContextInhooks';
function App() {
  return (
    <div>
     {/* <ClassConstructor/>
     <Componentlifecycle/> */}
     {/* <Propexample fname="Balaji" lname="Jagadeesh"/> */} 
     {/* <UnControlledComponent/> */}
     {/* <ControlledComponent/> */}
     {/* <ListExample/> */}
     {/* <Header/> */}
     {/* /* <TableExample/> */}
     <React.Fragment>
      <UserDetails.Provider value={{fname:'Jagadeesh', lname:'S', address:'Chennai'}}>
      <UserDetails/>
        
      </UserDetails.Provider>
     </React.Fragment>
     {/* <ContextExample/> */}
     {/* <ListExample/> */}
     {/* <HooksExample/> */}
    </div>
  );
}

export default App;
