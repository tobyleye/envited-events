import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LandingPage } from "pages/landing";
import { CreateEvent } from "pages/create";
import { EventDetails } from "pages/event";
import { EventContextProvider } from "./store";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <EventContextProvider>
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/create">
              <CreateEvent />
            </Route>
            <Route path="/event">
              <EventDetails />
            </Route>
          </Switch>
        </EventContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
