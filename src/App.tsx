import {ThemeProvider} from '@material-ui/core';
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { Home } from './pages/Home';
import {SignIn} from './pages/SignIn';
import { theme } from './theme';
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
  return (
    <Provider store={store} >
     <ThemeProvider theme={theme}>
        <div className="App">
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/" component={Home} />
            </Switch>
        </div>
     </ThemeProvider>
    </Provider>
  );
}

export default App;
