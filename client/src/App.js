import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

// pages for this product
import ChatbotPage from './Chatbot/Chatbot'
import LoadingPage from './Chatbot/LoadingPage/LoadingPage';

function App() {
  
  return (
      <Suspense fallback={(<div>Loading...</div>)}>
          <Switch>
            <Route exact path="/" component={(LoadingPage)} />
            <Route exact path="/chatbot" component={(ChatbotPage)} />
          </Switch>
      </Suspense>
  );
}

export default App;