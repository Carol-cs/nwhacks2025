import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { PassageProvider } from "@passageidentity/passage-react";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <PassageProvider appId="Xu4xVsHL14Btt2Dqle5U4Hzw">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App id="app" />
        </Provider>
      </PersistGate>
    </PassageProvider>
  </StrictMode>
);
