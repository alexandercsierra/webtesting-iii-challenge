import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Controls from './Controls'
afterEach(cleanup);


test('does controls render', () => {
    const controls = render(<Controls/>);
})


