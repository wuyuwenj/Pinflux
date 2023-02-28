import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import CreatePinPage from "./components/pins/create/createpin";

function App() {
  return (
    <>
      <Navigation />
        {/* <Switch> */}
          <Route path="/pin/create" >
            <CreatePinPage />
          </Route>
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
        {/* </Switch> */}
    </>
  );
}

export default App;