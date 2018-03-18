import { Card, CardHeader, CardContent, Typography, WithStyles, StyleRulesCallback } from 'material-ui';
import * as React from 'react';
import Timer from 'material-ui-icons/Timer';
import SimpleTimer from './SimpleTimer';
import * as moment from 'moment';
import withStyles from 'material-ui/styles/withStyles';
import { Branche, fetchCommitDate, getCommit } from '../redux/git';
import store from '../store';

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

    updateCommitDate(branch: Branche) {
        store.dispatch(fetchCommitDate(branch)).then(() => {
            this.setState({
                [branch]: getCommit(store.getState(), branch).data,
            });
        });
    }

    getCommitDate(branch: Branche) {
        const commit = this.state && this.state[branch];
        return commit && commit.isValid() && commit;
    }

    componentDidMount() {
        this.updateCommitDate(Branche.develop);
        this.updateCommitDate(Branche.master);
    }

    render() {
        const { classes } = this.props;

        const commitDateCard = (branche: Branche) => {
            const date = this.getCommitDate(branche);
            let elmt: JSX.Element | null = null;
            if (date) {
                elmt = (
                    <CardContent>
                        <Typography variant="body2">
                            {(() => {
                                switch (branche) {
                                    case Branche.master:
                                        return 'These version has been published';
                                    case Branche.develop:
                                        return 'Last "in progress" development was committed (and pushed to Github)';
                                    default:
                                        return '';
                                }
                            })()}
                        </Typography>
                        <SimpleTimer initialDate={date} />
                    </CardContent>
                );
            }
            return elmt;
        };

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Timer />
                    }
                    title="Motivational Timer"
                    className={classes.header}
                />
                <CardContent>
                    <Typography variant="body2">
                        I started this new side project
                    </Typography>
                    <SimpleTimer initialDate={moment({ year: 2018, month: 1, day: 26 })} />
                </CardContent>
                {commitDateCard(Branche.develop)}
                {commitDateCard(Branche.master)}
            </Card>
        );
    }
}

export default withStyles(styles)<{}>(MotivationalCard);
