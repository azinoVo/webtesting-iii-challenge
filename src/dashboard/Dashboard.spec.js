import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// import {toBeInTheDocument, toHaveClass, toHaveTextContent} from 'jest-dom';

import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard';

describe('The Dashboard Component', () => {
    it('runs tests', () => {
        expect(true).toBe(true);
    });


    it('It should show the Control Buttons with Lock/Unlock and Open/Closed Gate', () => {
        const { getByText } = render(<Dashboard />)
        const lockGate = getByText(/lock gate/i)
        const closeGate = getByText(/close gate/i)


        expect(lockGate).toBeTruthy();
        expect(lockGate.textContent).toBe('Lock Gate');

        expect(closeGate).toBeTruthy();
        expect(closeGate.textContent).toBe('Close Gate');


    });

    it('It should show the Display with Locked/unlocked and Closed/open', () => {
        const { getByText } = render(<Dashboard />)
        const unlocked = getByText(/unlocked/i)
        const open = getByText(/open/i)

        
        expect(unlocked).toBeTruthy();
        expect(unlocked.textContent).toBe('Unlocked');

        expect(open).toBeTruthy();
        expect(open.textContent).toBe('Open');

        
    });

});

// show an h2 with Hello World

