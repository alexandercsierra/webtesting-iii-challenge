import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Dashboard from './Dashboard'
afterEach(cleanup);


test('does dashboard render', () => {
    const dashboard = render(<Dashboard/>)
})
