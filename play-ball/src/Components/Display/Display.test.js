import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('display component test', () => {
    const displayComponent = render(<Display />);

    it('display-component exists', () => {
        expect(displayComponent).toBeTruthy();
    })
})