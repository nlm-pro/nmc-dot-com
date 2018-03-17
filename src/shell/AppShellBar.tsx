import { WithStyles, StyleRulesCallback, Toolbar, Typography, AppBar, IconButton, Hidden } from 'material-ui';
import * as React from 'react';
import { drawerWidth } from './AppDrawer';
import { RootState } from '../redux';
import { getTitle } from '../redux/shell';
import { connect } from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';
import MenuIcon from 'material-ui-icons/Menu';

type Classes = 'appBar' | 'navIconHide';

interface AppShellBarProps {
    title: string;
    handleDrawerToggle: () => void;
}

type Props = WithStyles<Classes> & AppShellBarProps;

const styles: StyleRulesCallback<Classes> = theme => ({
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class AppShellBar extends React.Component<Props> {

    render() {
        const { classes, title, handleDrawerToggle } = this.props;
        return (
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.navIconHide}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                        <Hidden mdUp>No&euml;l Mac&eacute; - </Hidden>{title}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

const WrappedAppBar = withStyles(styles)<AppShellBarProps>(AppShellBar);

const mapStateToProps = (state: RootState) => ({
    title: getTitle(state),
});

export default connect(mapStateToProps, {})(WrappedAppBar);