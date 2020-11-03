import React from 'react';
import { render, screen } from '@testing-library/react';
import SampleComponent from "../components/SampleComponent";
import FeaturedMessage from "../classes/FeaturedMessage";

test("SampleComponent.test_properties_1", () => {
    let msgs: FeaturedMessage[] = [new FeaturedMessage(1, "First Title", "First Message", 0), new FeaturedMessage(2, "Second Title", "Second Message", 0)]

    render(<SampleComponent messages={msgs}/>);
    const titleElement = screen.getByText(/First Title/i);
    expect(titleElement).toBeInTheDocument();

    const messageElement = screen.getByText(/Second Message/i);
    expect(messageElement).toBeInTheDocument();
})

test("SampleComponent.test_empty_params", () => {
    render(<SampleComponent messages={[]}/>);

    // we expect that nothing explodes, and sample text is still there
    expect(screen.getByText("Sample React Component")).toBeInTheDocument()
})