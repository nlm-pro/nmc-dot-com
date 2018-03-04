import * as React from 'react';
import withRoot from './HOCs/withRoot';
import { Route } from 'react-router';
import Home from './scenes/Home';
import AppBar from 'material-ui/AppBar';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { StyleRulesCallback } from 'material-ui';
import withTracker from './HOCs/withTracker';

type classes = 'root' | 'header' | 'content';

const styles: StyleRulesCallback<classes> = theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 2
    }
  }
});

class App extends React.Component<WithStyles<classes>, {}> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static" className={this.props.classes.header}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Noël Macé (dot com)
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={this.props.classes.content}>
          <Route exact path="/" component={withTracker(Home, {})} />
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)<{}>(App));
