import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { SuccessTag } from './index';
import '../index.scss';

export default {
  title: 'Tags/Success',
  decorators: [withKnobs]
};

export const Options = () => (
  <SuccessTag
    children={text("children", "Tag")}
    closable={boolean("closable", false)}
    visible={boolean('visible', true)}
    className={text('className', "")}
    icon={<>&gt;</>}
    closeIcon={<>X</>}

  />
)

export const Default = () => (
  <SuccessTag
    children={text("children", "Tag")}
    closeIcon={<>X</>}
  />
)
