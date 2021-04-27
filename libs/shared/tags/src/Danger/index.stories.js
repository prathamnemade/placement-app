import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { DangerTag } from './index';
import '../index.scss';

export default {
  title: 'Tags/Danger',
  decorators: [withKnobs]
};

export const Options = () => (
  <DangerTag
    children={text("children", "Tag")}
    closable={boolean("closable", false)}
    visible={boolean('visible', true)}
    className={text('className', "")}
    icon={<>&gt;</>}
    closeIcon={<>X</>}

  />
)

export const Default = () => (
  <DangerTag
    children={text("children", "Tag")}
    closable={boolean("closable", false)}
    closeIcon={<>X</>}
  />
)
