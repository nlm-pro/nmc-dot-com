import * as React from 'react';
import withRoot from './HOCs/withRoot';
import { Route } from 'react-router';
import Home from './scenes/Home';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import { StyleRulesCallback } from 'material-ui';
import withTracker from './HOCs/withTracker';
import AppDrawer, { drawerWidth } from './shell/AppDrawer';
import AppShellBar from './shell/AppShellBar';
import About from './scenes/About';
import CssBaseline from 'material-ui/CssBaseline';
import Networks from './scenes/Networks';

type Classes = 'root' | 'appBar' | 'content' | 'toolbar';

const styles: StyleRulesCallback<Classes> = theme => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

type Props = WithStyles<Classes>;

interface AppState {
  mobileOpen: boolean;
}

class App extends React.Component<Props, AppState> {

  constructor(props: Props) {
    super(props);
    this.state = { mobileOpen: false };
  }

  handleDrawerClose = () => {
    this.setState({
      mobileOpen: false,
    });
  };

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppShellBar handleDrawerToggle={this.handleDrawerToggle} />
        <AppDrawer
          onToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
          onClose={this.handleDrawerClose}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route exact path="/" component={withTracker(Home, {})} />
          <Route path="/about" component={withTracker(About, {})} />
          <Route path="/networks" component={withTracker(Networks, {})} />
        </main>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)<{}>(App));
