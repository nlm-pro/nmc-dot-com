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
import AppDrawer from './shell/AppDrawer';
import { getTitle } from './redux/shell';
import { RootState } from './redux';
import { connect } from 'react-redux';

type Classes = 'root' | 'appBar' | 'content' | 'toolbar';

const drawerWidth = 240;

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

type Props = WithStyles<Classes> & {
  title: string,
};

class App extends React.Component<Props, {}> {

  render() {
    const { classes, title } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <AppDrawer />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route exact path="/" component={withTracker(Home, {})} />
        </main>
      </div>
    );
  }
}

const WrappedApp = withRoot(withStyles(styles)<{}>(App));

const mapStateToProps = (state: RootState) => ({
  title: getTitle(state),
});

export default connect(mapStateToProps, {})(WrappedApp);
