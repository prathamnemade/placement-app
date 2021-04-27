import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import '../index.scss';
import { CheckboxGroup } from './index';

export default {
  title: 'Checkboxes/Group',
  decorators: [withKnobs]
};


export const Group = () => {
  const [values, setValues] = React.useState(['A'])
  const handleValuesChange = (values) => setValues(values)
  return (
    <CheckboxGroup
      options={[
        { label: 'UK', value: 'A' },
        { label: 'US', value: 'B' },
        { label: 'UEA', value: 'C' },
        { label: 'DE', value: 'D' },
        { label: 'FR', value: 'E' },
        { label: 'SA', value: 'F' },
      ]}
      value={values}
      name={text('name', "")}
      disabled={boolean('disabled', false)}
      onChange={handleValuesChange}
      si
    />
  )
}