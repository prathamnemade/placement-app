import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { WarningTag } from './index';
import '../index.scss';

export default {
  title: 'Tags/Warning',
  decorators: [withKnobs]
};

export const Options = () => (
  <WarningTag
    children={text("children", "Tag")}
    closable={boolean("closable", false)}
    visible={boolean('visible', true)}
    className={text('className', "")}
    icon={<>&gt;</>}
    closeIcon={<>X</>}

  />
)

export const Default = () => (
  <WarningTag
    children={text("children", "Tag")}
    closeIcon={<>X</>}
  />
)
