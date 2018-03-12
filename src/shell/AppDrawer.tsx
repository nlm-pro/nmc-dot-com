import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import * as React from 'react';
import { StyleRulesCallback, Drawer, Divider, List, ListItemIcon, ListItemText, ListItem } from 'material-ui';
import HomeIcon from 'material-ui-icons/Home';
import Typography from 'material-ui/Typography';

type Classes = 'drawerPaper' | 'toolbar';

const drawerWidth = 240;

const styles: StyleRulesCallback<Classes> = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: {
        ...theme.mixins.toolbar,
        textAlign: 'center',
        padding: theme.spacing.unit,
    },
});

interface AppDrawarProps {
}

type Props = AppDrawarProps & WithStyles<Classes>;

class AppDrawer extends React.Component<Props> {

    render() {
        const { classes } = this.props;

        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} >
                    <Typography variant="title">No&euml;l Mac&eacute;</Typography>
                    <Typography variant="subheading">Personal Web App</Typography>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home page" />
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles)<AppDrawarProps>(AppDrawer);
