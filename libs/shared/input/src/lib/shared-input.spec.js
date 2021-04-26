import React from 'react';
import { render } from '@testing-library/react';
import SharedInput from './shared-input';
describe('SharedInput', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SharedInput />);
        expect(baseElement).toBeTruthy();
    });
});
