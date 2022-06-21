import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/styles.css';

const root = createRoot(document.querySelector("#root"));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);