import * as React from 'react';
import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import store from '../store';
import { shellActions } from '../redux/shell';

type Classes = 'about';

const styles: StyleRulesCallback<Classes> = theme => ({
    about: {
        padding: 12,
    },
});

type AboutState = {};

class About extends React.Component<WithStyles<Classes>, AboutState> {

    componentDidMount() {
        store.dispatch(shellActions.setTitle('About me'));
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.about}>
                <Typography variant="title">
                    Writting in progress ...
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)<{}>(About);
