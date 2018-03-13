import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import * as React from 'react';
import { StyleRulesCallback, Drawer, Divider, List, ListItemIcon, ListItemText, ListItem } from 'material-ui';
import HomeIcon from 'material-ui-icons/Home';
import PersonIcon from 'material-ui-icons/Person';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

type Classes = 'drawerPaper' | 'toolbar' | 'link';

export const drawerWidth = 240;

const styles: StyleRulesCallback<Classes> = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    link: {
        textDecoration: 'none',
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

        // TODO: active Link
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
                    <Link to="/" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home page" />
                        </ListItem>
                    </Link>
                    <Link to="/about" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="About me" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles)<AppDrawarProps>(AppDrawer);
