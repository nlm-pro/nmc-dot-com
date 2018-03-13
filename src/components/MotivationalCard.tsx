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

enum Branche {
    develop = 'develop',
    ghPages = 'gh-pages',
}

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
        this.repo.getBranch(branch).then((res: any) => {
            this.setState({
                [branch]: moment(res.data.commit.commit.committer.date.slice(0, -1)).add(1, 'h')
            });
        });
    }

    getCommitDate(branch: Branche) {
        const commit = this.state && this.state[branch];
        return commit && commit.isValid() && commit;
    }

    componentWillMount() {
        this.repo = (new Github()).getRepo('noelmace', 'nmc-dot-com');
    }

    componentDidMount() {
        this.updateCommitDate(Branche.develop);
        this.updateCommitDate(Branche.ghPages);
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
                                    case Branche.develop:
                                        return 'These version has been published';
                                    case Branche.ghPages:
                                        return 'Last commit on the "develop" branch was';
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
                {commitDateCard(Branche.ghPages)}
            </Card>
        );
    }
}

export default withStyles(styles)<{}>(MotivationalCard);
