import * as React from 'react';
import Typography from 'material-ui/Typography';
import poster from './giphy.gif';
import video from './giphy.mp4';
import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles';

const styles: StyleRulesCallback<'home'> = theme => ({
    home: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

class Home extends React.Component<WithStyles<'home'>, {}> {
    render() {
        return (
            <div className={this.props.classes.home}>
                <Typography variant="display1" gutterBottom>
                    Website under (re-)construction !
                </Typography>
                <Typography variant="subheading" gutterBottom>
                    With real pieces of React.js and PWA inside !<br />
                    So, take a drink, relax, and be patient ;)
                    It'll be back soon enough.
                </Typography>
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
            </div>
        );
    }
}

export default withStyles(styles)<{}>(Home);
