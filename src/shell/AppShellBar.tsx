import { WithStyles, StyleRulesCallback, Toolbar, Typography, AppBar } from 'material-ui';
import * as React from 'react';
import { drawerWidth } from './AppDrawer';
import { RootState } from '../redux';
import { getTitle } from '../redux/shell';
import { connect } from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';

type Classes = 'appBar';

interface AppShellBarProps {
    title: string;
}
type Props = WithStyles<Classes> & AppShellBarProps;

const styles: StyleRulesCallback<Classes> = theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
});

class AppShellBar extends React.Component<Props> {

    render() {
        const { classes, title } = this.props;
        return (
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        {title}
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