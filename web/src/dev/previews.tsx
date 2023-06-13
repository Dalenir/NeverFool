import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../App";
import {Counter} from "../features/counter/Counter";
import Test from "../test";
import NotCounter from "../features/component/Component";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Counter">
                <Counter/>
            </ComponentPreview>
            <ComponentPreview path="/Test">
                <Test/>
            </ComponentPreview>
            <ComponentPreview path="/NotCounter">
                <NotCounter/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;