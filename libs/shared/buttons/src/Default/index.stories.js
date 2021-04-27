import { boolean, object, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import '../index.scss';
import { Button } from './index';

export default {
  title: 'Buttons/Default',
  decorators: [withKnobs]
};


export const Default = () => (
  <Button
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


export const IconText = () => (
  <Button
    children={text('children', "Button")}
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


export const Icon = () => (
  <Button
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
