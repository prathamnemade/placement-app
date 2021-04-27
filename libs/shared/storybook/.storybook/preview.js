import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import 'antd/dist/antd.css';
import '../../styles/src/index.scss';

addDecorator(withKnobs);
