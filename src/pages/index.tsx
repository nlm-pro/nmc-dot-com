import * as React from 'react';
import Typography from 'material-ui/Typography';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import withRoot from '../withRoot';
import poster from './giphy.gif';
import video from './giphy.mp4';

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

type State = {
  open: boolean;
};

class Index extends React.Component<WithStyles<'root'>, State> {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography variant="display1" gutterBottom>
          Noël Macé ( dot com )
        </Typography>
        <Typography variant="subheading" gutterBottom>
          Website under (re-)construction !
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

export default withRoot(withStyles(styles)<{}>(Index));
