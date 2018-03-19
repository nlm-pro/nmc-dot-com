import * as React from 'react';
import { StyleRulesCallback, WithStyles } from 'material-ui';
import withStyles from 'material-ui/styles/withStyles';
import * as moment from 'moment';

interface SimpleTimerState {
    time: string;
}

export interface SimpleTimerProps {
    initialDate: moment.Moment;
}

type Classes = 'timer';
type Props = SimpleTimerProps & WithStyles<Classes>;

const styles: StyleRulesCallback<Classes> = theme => ({
    timer: {
        textAlign: 'center',
        fontSize: 42
    },
});

export class SimpleTimer extends React.Component<Props, SimpleTimerState> {

    private timer: NodeJS.Timer;

    constructor(props: Props) {
        super(props);
        this.state = {
            time: this.props.initialDate ? this.props.initialDate.fromNow() : '',
        };
    }

    getDelai() {
        const diff = moment().diff(this.props.initialDate);
        return (
            diff / 1000 / 60 / 60 / 24 > 1 ? 1000 * 60 * 60 * 24  // days
                : diff / 1000 / 60 / 60 > 1 ? 1000 * 60 * 60 // hour
                    : 1000 * 60 // minute
        ) + 500;
    }

    delaiUpdate(force: boolean = false) {
        clearInterval(this.timer);
        this.timer = setTimeout(this.updateTime, force ? 100 : this.getDelai());
    }

    updateTime = () => {
        this.setState({
            time: this.props.initialDate.fromNow()
        });
        this.delaiUpdate();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentWillReceiveProps() {
        this.delaiUpdate(true);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.timer}>{this.state.time}</div>
        );
    }
}

export default withStyles(styles)<SimpleTimerProps>(SimpleTimer);

export { SimpleTimer as SimpleTimerClass };
