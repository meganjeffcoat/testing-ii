import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('dashboard component test', () => {
    const dashboardComponent = render(<Dashboard />);

    it('dash-component exists', () => {
        expect(dashboardComponent).toBeTruthy();
    })
})