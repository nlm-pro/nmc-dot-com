import * as React from 'react';
import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles';
import Grid from 'material-ui/Grid';
import UnderConstructionCard from '../components/UnderConstructionCard';

type Classes = 'home';

const styles: StyleRulesCallback<Classes> = theme => ({
    home: {
        textAlign: 'center',
        flexGrow: 1,
    }
});

type HomeState = {};

class Home extends React.Component<WithStyles<Classes>, HomeState> {

    render() {
        const classes = this.props.classes;
        return (
            <Grid
                container
                className={classes.home}
                alignItems="center"
                justify="center"
                direction="column"
                spacing={24}
            >
                <Grid item md={6} sm={12}>
                    <UnderConstructionCard />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)<{}>(Home);
