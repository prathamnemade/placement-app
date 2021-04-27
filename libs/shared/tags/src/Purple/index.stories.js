import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { PurpleTag } from './index';
import '../index.scss';

export default {
  title: 'Tags/Purple',
  decorators: [withKnobs]
};

export const Options = () => (
  <PurpleTag
    children={text("children", "Tag")}
    closable={boolean("closable", false)}
    visible={boolean('visible', true)}
    className={text('className', "")}
    icon={<>&gt;</>}
    closeIcon={<>X</>}

  />
)

export const Default = () => (
  <PurpleTag
    children={text("children", "Tag")}
    closeIcon={<>X</>}
  />
)
