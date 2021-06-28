import React from "react";
import {Meta} from "@storybook/react";

import 'bootstrap/dist/css/bootstrap.min.css';
import SampleComponent from "./SampleComponent";
import {featured} from "../classes/FeaturedMessage";


export default { title: "Samples/Sample features", component: SampleComponent} as Meta


export const FourMessages = (): React.ReactNode => <SampleComponent messages={[featured("title 1", "message 1"), featured("title 2", "message 2"), featured("title 3", "message 3"), featured("title 4", "message 4")]} />

export const ThreeMessages = (): React.ReactNode => <SampleComponent messages={[featured("title 1", "message 1"), featured("title 2", "message 2"), featured("title 3", "message 3")]} />

export const TwoMessages = (): React.ReactNode => <SampleComponent messages={[featured("title 1", "message 1"), featured("title 2", "message 2")]} />