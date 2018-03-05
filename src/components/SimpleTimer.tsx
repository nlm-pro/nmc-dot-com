import * as React from 'react';
import { StyleRulesCallback, WithStyles } from 'material-ui';
import withStyles from 'material-ui/styles/withStyles';
import * as moment from 'moment';

interface SimpleTimerState {
    time: string;
}

export interface SimpleTimerProps {
    initialDate: moment.Moment;
    interval?: number;
}

type Classes = 'timer';
type Props = SimpleTimerProps & WithStyles<Classes>;

const styles: StyleRulesCallback<Classes> = theme => ({
    timer: {
        textAlign: 'center',
        fontSize: 42
    },
});

class SimpleTimer extends React.Component<Props, SimpleTimerState> {

    public static defaultProps: Partial<Props> = {
        interval: 60 * 1000
    };

    private timer: NodeJS.Timer;

    constructor(props: Props) {

        super(props);
        this.state = { time: this.props.initialDate.fromNow() };
    }

    updateTime = () => {
        this.setState({
            time: this.props.initialDate.fromNow()
        });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.timer = setInterval(this.updateTime, this.props.interval as number);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.timer}>{this.state.time}</div>
        );
    }
}

export default withStyles(styles)<SimpleTimerProps>(SimpleTimer);
