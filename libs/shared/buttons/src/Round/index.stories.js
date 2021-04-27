import { boolean, object, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import '../index.scss';
import { RoundButton } from './index';

export default {
  title: 'Buttons/Rounded',
  decorators: [withKnobs]
};


export const Round = () => (
  <RoundButton
    children={text('children', "Button")}
    size={select("size", ["small", "middle", "large"], "middle")}
    disabled={boolean('disabled', false)}
    ghost={boolean('ghost', false)}
    style={object("styles", {})}
    loading={boolean('loading', false)}
    onClick={() => alert('Hello')}
    className={text('className', "")}
  />
)


export const RoundIcon = () => (
  <RoundButton
    icon={<>&#64;</>}
    size={select("size", ["small", "middle", "large"], "middle")}
    disabled={boolean('disabled', false)}
    ghost={boolean('ghost', false)}
    style={object("styles", {})}
    loading={boolean('loading', false)}
    onClick={() => alert('Hello')}
    className={text('className', "")}
  />
)