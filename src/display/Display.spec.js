import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Display from './Display'
afterEach(cleanup);


test('does controls render', () => {
    const display = render(<Display/>);
})


