import { Card, CardHeader, CardContent, Typography, WithStyles, StyleRulesCallback } from 'material-ui';
import * as React from 'react';
import Timelapse from 'material-ui-icons/Timelapse';
import SimpleTimer from './SimpleTimer';
import * as moment from 'moment';
import withStyles from 'material-ui/styles/withStyles';

type Classes = 'card';

const styles: StyleRulesCallback<Classes> = theme => ({
    card: {
        textAlign: 'center',
        height: '100%'
    },
});

class MotivationalCard extends React.Component<WithStyles<Classes>, {}> {
    render() {
        const classes = this.props.classes;
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Timelapse />
                    }
                    title="Motivational Timer"
                />
                <CardContent>
                    <Typography variant="body2">
                        The (re-)construction began :
                    </Typography>
                    <SimpleTimer initialDate={moment({ year: 2018, month: 1, day: 26 })} />
                </CardContent>
                <CardContent>
                    <Typography variant="body2">
                        Last update :
                    </Typography>
                    <SimpleTimer initialDate={moment({ year: 2018, month: 2, day: 3 })} />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)<{}>(MotivationalCard);
