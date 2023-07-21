import React from "react";
import LogIn from "./Login";



let isLoggedIn = false;



function App() {
  return (
    <div className="container">{
    isLoggedIn===true ? <h1>Hello</h1>: <LogIn />}
  
    </div>
  );
}

export default App;
