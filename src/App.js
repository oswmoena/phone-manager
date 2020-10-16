import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import Navbar from "./componens/Navbar";
import ContactList from "./componens/ContactList";

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div>
          <Navbar />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;