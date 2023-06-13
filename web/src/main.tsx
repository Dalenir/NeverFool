import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import store from './store/store'
import { Provider } from 'react-redux'
import {Counter} from "./features/counter/Counter";
import NotCounter from "./features/component/Component";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>

        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
                <App/>
        </DevSupport>
        </Provider>
    </React.StrictMode>,
);
