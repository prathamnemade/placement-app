import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import '../index.scss';
import { Checkbox } from './index';

export default {
  title: 'Checkboxes/Default',
  decorators: [withKnobs]
};


export const Default = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      autoFocus={boolean('AutoFocus', false)}
      checked={checked}
      defaultChecked={boolean('defaultChecked', false)}
      disabled={boolean('disabled', false)}
      indeterminate={boolean('indeterminate', false)}
      onChange={(e) => setChecked(e.target.checked)}
      children={text('Label', "Checkbox")}
    />
  )
}