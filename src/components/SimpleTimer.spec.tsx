import * as React from 'react';
import * as moment from 'moment';
import * as MockDate from 'mockdate';
import SimpleTimer, { SimpleTimerClass } from './SimpleTimer';
import { createShallow } from 'material-ui/test-utils';
import { ShallowWrapper } from 'enzyme';

let wrapper: ShallowWrapper;
let simpleTimer: SimpleTimerClass;
const currentDate = '2000-12-31T23:59';

beforeEach(() => {
    // const div = document.createElement('div');
    // ReactDOM.render(<SimpleTimer initialDate={moment()} />, div);
    const shallow = createShallow({ dive: true });
    wrapper = shallow(
        <SimpleTimer initialDate={moment(currentDate)} />,
    );
    simpleTimer = wrapper.instance() as SimpleTimerClass;

});

describe('getDelai', () => {

    beforeAll(() => {
        MockDate.set(new Date(currentDate));
    });

    it('get the right update delai', () => {
        wrapper.setProps({ initialDate: moment(currentDate).subtract(2, 'day') });
        expect(simpleTimer.getDelai()).toEqual(1000 * 60 * 60 * 24 + 500);
        wrapper.setProps({ initialDate: moment(currentDate).subtract(2, 'hour') });
        expect(simpleTimer.getDelai()).toEqual(1000 * 60 * 60 + 500);
        wrapper.setProps({ initialDate: moment(currentDate).subtract(2, 'minute') });
        expect(simpleTimer.getDelai()).toEqual(1000 * 60 + 500);
        wrapper.setProps({ initialDate: moment(currentDate).subtract(2, 'second') });
        expect(simpleTimer.getDelai()).toEqual(1000 * 60 + 500);
    });

    afterAll(() => {
        MockDate.reset();
    });

});
