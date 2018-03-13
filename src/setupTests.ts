import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { ShallowRendererProps } from 'enzyme';

export interface ShallowUntilTargetOptions {
    maxTries: number;
    shallowOptions: ShallowRendererProps;
  }
