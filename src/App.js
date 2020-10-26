import React from 'react';
import './App.css';
import Header from "./components/Header"
import Signup from "./pages/Signup"
import {Route, Link, Switch} from "react-router-dom"

export const GlobalCtx = React.createContext(null)

function App() {

  const [gState, setGState] = React.useState({url: "http://localhost:3000"})

  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
    <div className="App">
        <h1>React<span>Notes</span></h1>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={(rp) => <h1>Home</h1>}/>
            <Route path="/signup" render={(rp) => <Signup {...rp}/>}/>
            <Route path="/login" render={(rp) => <h1>login</h1>}/>
            <Route path="/dashboard" render={(rp) => <h1>dashboard</h1>}/>
          </Switch>
        </main>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
