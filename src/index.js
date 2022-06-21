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

// Why I change the index.js to createRoot:
// ReactDOM.render is no longer supported in React 18. 
// Use createRoot instead. Until you switch to the new API, 
// your app will behave as if it's running React 17. 
// Learn more: https://reactjs.org/link/switch-to-createroot