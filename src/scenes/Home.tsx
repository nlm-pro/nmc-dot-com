import * as React from 'react';
import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import UnderConstructionCard from '../components/UnderConstructionCard';
import MotivationalCard from '../components/MotivationalCard';
import store from '../store';
import { shellActions } from '../redux/shell';

type Classes = 'home';

const styles: StyleRulesCallback<Classes> = theme => ({
    home: {
        padding: 12,
    },
});

type HomeState = {};

class Home extends React.Component<WithStyles<Classes>, HomeState> {

    componentDidMount() {
        store.dispatch(shellActions.setTitle('Home Page'));
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.home}>
                <Grid
                    container
                    alignItems="stretch"
                    justify="center"
                    spacing={24}
                >
                    <Grid item md={6} xs={12}>
                        <UnderConstructionCard />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <MotivationalCard />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)<{}>(Home);
