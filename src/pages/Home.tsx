import * as React from 'react';
import Typography from 'material-ui/Typography';
import poster from './giphy.gif';
import video from './giphy.mp4';
import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

type classes = 'home' | 'card';

const styles: StyleRulesCallback<classes> = theme => ({
    home: {
        textAlign: 'center',
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing.unit * 2,
    }
});

class Home extends React.Component<WithStyles<classes>, {}> {

    classes = this.props.classes;

    render() {
        return (
            <Grid
                container
                className={this.classes.home}
                alignItems="center"
                justify="center"
                direction="column"
                spacing={24}
            >
                <Grid item md={6} sm={12}>
                    <Card className={this.classes.card}>
                        <CardHeader
                            title="Website under (re-)construction !"
                            subheader="With real pieces of personnal technical challenges inside !"
                        />
                        <CardContent>
                            <video
                                width="320"
                                height="320"
                                autoPlay
                                loop
                                muted
                                poster={poster}
                            >
                                <source type="video/mp4" src={video} />
                                Your browser does not support HTML5 video tag.
                                <a href="https://gph.is/1ZidoAN">
                                    Click here to view original GIF
                                </a>
                            </video>
                        </CardContent>
                        <CardContent>
                            <Typography variant="body2">
                                Features will arrive piece by piece.
                            </Typography>
                            <Typography>
                                So, take a drink, relax, and be patient. And above all, come back as often as possible !
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)<{}>(Home);
