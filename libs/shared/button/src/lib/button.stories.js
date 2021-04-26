import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Button } from './button';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs]
};

export const ButtonTemplate = () => (
  <Button
    color={select('Color', ['primary', 'warning', 'info', 'success', 'danger', 'default'], 'default')}
    type={select('Type', ['dashed', 'link', 'text', 'default'], 'default')}
    shape={select('Shape', ['round', 'default'], 'default')}
    children={text('Children', 'Button')}
    className={text('ClassName', '')}
    disabled={boolean('Disabled', false)}
  />
)