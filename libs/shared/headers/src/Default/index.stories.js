import { number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import '../index.scss';
import { Header } from './index';

export default {
  title: 'Headers/Default',
  decorators: [withKnobs]
};

// Default button with all props options (except: href, target, loading)
export const Default = () => (
  <Header
    type={select("type", ["dark", "default"], "default")}
    className={text("className", "")}
    style={object("style", {})}
  />
)