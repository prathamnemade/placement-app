import { boolean, object, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import '../index.scss';
import { CircleButton } from './index';

export default {
  title: 'Buttons/Circle',
  decorators: [withKnobs]
};


export const CircleIcon = () => (
  <CircleButton
    icon={<>&#64;</>}
    size={select("size", ["small", "middle", "large"], "middle")}
    disabled={boolean('disabled', false)}
    ghost={boolean('ghost', false)}
    style={object("styles", {})}
    loading={boolean('loading', false)}
    onClick={() => alert('Hello')}
    className={text("className","")}
  />
)


export const CircleText = () => (
  <CircleButton
    children={text('children', "Bu")}
    size={select("size", ["small", "middle", "large"], "middle")}
    disabled={boolean('disabled', false)}
    ghost={boolean('ghost', false)}
    style={object("styles", {})}
    onClick={() => alert('Hello')}
    className={text("className","")}
  />
)

