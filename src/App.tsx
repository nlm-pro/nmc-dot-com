import * as React from 'react';
import withRoot from './withRoot';
import { Route } from 'react-router';
import Home from './pages/Home';
import AppBar from 'material-ui/AppBar';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class App extends React.Component<WithStyles<'root'>, {}> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Noël Macé (dot com)
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)<{}>(App));
