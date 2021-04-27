import { boolean, color, number, select, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import '../index.scss';
import { Progress } from './index';

export default {
  title: 'Progress/Line',
  decorators: [withKnobs]
};

// Default button with all props options (except: href, target, loading)
export const Line = () => (
  <Progress
    color={select("type", ["success", "warning", "danger", "default"], "default")}
    showInfo={boolean("showInfo", false)}
    percent={number("percent", 25, { min: 0, max: 100 })}
    strokeColor={color('strokeColor')}
    trailColor={color('trailColor')}
  />
)