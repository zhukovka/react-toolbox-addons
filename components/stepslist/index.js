import {STEPSLIST} from '../identifiers';
import { themr } from 'react-css-themr';
import { stepsListFactory } from './StepsList.js';
import ChipTransparent from '../chips';
import theme from './theme.scss';

const StepsList = stepsListFactory(ChipTransparent);
const ThemedStepsList = themr(STEPSLIST, theme)(StepsList);

export default ThemedStepsList;
export { ThemedStepsList as StepsList };
