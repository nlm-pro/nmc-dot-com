import * as React from 'react';
import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import UnderConstructionCard from '../components/UnderConstructionCard';

type Classes = 'home';

const styles: StyleRulesCallback<Classes> = theme => ({
    home: {
        padding: 12,
    },
});

type HomeState = {};

class Home extends React.Component<WithStyles<Classes>, HomeState> {

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.home}>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    spacing={24}
                >
                    <Grid item md={6} xs={12}>
                        <UnderConstructionCard />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)<{}>(Home);
