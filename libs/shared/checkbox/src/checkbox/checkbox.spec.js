import React from 'react';
import { render } from '@testing-library/react';
import SharedCheckbox from './shared-checkbox';
describe('SharedCheckbox', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SharedCheckbox />);
        expect(baseElement).toBeTruthy();
    });
});
