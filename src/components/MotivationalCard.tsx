import { Card, CardHeader, CardContent, Typography, WithStyles, StyleRulesCallback } from 'material-ui';
import * as React from 'react';
import Timer from 'material-ui-icons/Timer';
import SimpleTimer from './SimpleTimer';
import * as moment from 'moment';
import withStyles from 'material-ui/styles/withStyles';
import { default as Github } from 'github-api';

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

interface MotivationalCardState {
    lastDeploy: moment.Moment;
    lastCommit: moment.Moment;
}

class MotivationalCard extends React.Component<WithStyles<Classes>, MotivationalCardState> {

    constructor(props: WithStyles<Classes>) {
        super(props);
        this.state = {
            lastDeploy: moment('invalid'),
            lastCommit: moment('invalid')
        };
    }

    convertGhResToMoment(res: any): moment.Moment {
        return moment(res.data.commit.commit.committer.date.slice(0, -1)).add(1, 'h');
    }

    componentDidMount() {
        const repo = (new Github()).getRepo('noelmace', 'nmc-dot-com');
        repo.getBranch('develop').then((res: any) => {
            this.setState({
                lastCommit: this.convertGhResToMoment(res)
            });
        });
        repo.getBranch('gh-pages').then((res: any) => {
            this.setState({
                lastDeploy: this.convertGhResToMoment(res)
            });
        });
    }

    render() {
        const classes = this.props.classes;
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
                {(() => {
                    if (this.state.lastDeploy.isValid()) {
                        return (
                            <CardContent>
                                <Typography variant="body2">
                                    These version has been published
                                </Typography>
                                <SimpleTimer initialDate={this.state.lastDeploy} />
                            </CardContent>
                        );
                    }
                    return;
                })()}
                {(() => {
                    if (this.state.lastCommit.isValid()) {
                        return (
                            <CardContent>
                                <Typography variant="body2">
                                    Last commit on the 'develop' branch was
                                </Typography>
                                <SimpleTimer initialDate={this.state.lastCommit} />
                            </CardContent>
                        );
                    }
                    return;
                })()}
            </Card>
        );
    }
}

export default withStyles(styles)<{}>(MotivationalCard);
