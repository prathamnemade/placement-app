import React from 'react';
import { render } from '@testing-library/react';
import SharedTypography from './shared-typography';
describe('SharedTypography', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SharedTypography />);
        expect(baseElement).toBeTruthy();
    });
});
