import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Daycares from "./components/Daycares";
import DaycareDetails from "./components/DaycareDetails";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import SearchResults from "./components/SearchResults";
import PageNotFound from "./components/404";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/daycares'>
            <Daycares />
          </Route>
          <Route path='/daycares/:id'>
            <DaycareDetails />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
          <Route path='/search/:searchword'>
            <SearchResults />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
