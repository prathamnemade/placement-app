import React from 'react';
import { render } from '@testing-library/react';
import SharedTags from './shared-tags';

describe('SharedTags', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SharedTags />);
        expect(baseElement).toBeTruthy();
    });
});
