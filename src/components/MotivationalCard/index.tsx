import { Card, CardHeader, WithStyles, StyleRulesCallback } from 'material-ui';
import * as React from 'react';
import Timer from 'material-ui-icons/Timer';
import * as moment from 'moment';
import withStyles from 'material-ui/styles/withStyles';
import { Branche, fetchCommitDates } from '../../redux/git';
import ConnectedCommitDateCard from './ConnectedCommitDateCard';
import store from '../../store';
import { CommitDateCard } from './CommitDateCard';

type Classes = 'card' | 'header';

const styles: StyleRulesCallback<Classes> = theme => ({
    card: {
        textAlign: 'center',
        height: '100%'
    },
    header: {
        marginBottom: theme.spacing.unit * 2
    }
});

type MotivationalCardState = {
    [key in Branche]?: moment.Moment;
};

const initialState: MotivationalCardState = {};

class MotivationalCard extends React.Component<WithStyles<Classes>, MotivationalCardState> {

    repo: any;

    constructor(props: WithStyles<Classes>) {
        super(props);
        this.state = initialState;
    }

    componentWillMount() {
        store.dispatch(fetchCommitDates());
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Timer />
                    }
                    className={classes.header}
                />
                <CommitDateCard
                    message="This React version was started"
                    initialDate={moment({ year: 2018, month: 1, day: 26 })}
                />
                <ConnectedCommitDateCard branche={Branche.develop} />
                <ConnectedCommitDateCard branche={Branche.master} />
            </Card>
        );
    }
}

export default withStyles(styles)<{}>(MotivationalCard);
