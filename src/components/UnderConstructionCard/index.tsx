import { WithStyles, StyleRulesCallback, Typography } from 'material-ui';
import * as React from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import { CardActions, IconButton, Collapse } from 'material-ui';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Timelapse from 'material-ui-icons/Timelapse';
import * as classnames from 'classnames';
import poster from './giphy.gif';
import video from './giphy.mp4';
import withStyles from 'material-ui/styles/withStyles';
import FakeChecklist from '../FakeChecklist';

type Classes = 'card' | 'actions' | 'expand' | 'expandOpen' | 'details' | 'media' | 'gif';
type UnderConstructionCardState = { expanded: boolean };

const styles: StyleRulesCallback<Classes> = theme => ({
    card: {
        textAlign: 'center',
    },
    actions: {
        display: 'flex',
        paddingLeft: theme.spacing.unit * 4
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    details: {
        textAlign: 'justify',
    },
    media: {
        backgroundColor: '#000',
        padding: 0,
    },
    gif: {
        maxWidth: '100%',
    }
});

type TodoItem = { title: string, text?: string };

const todoList: TodoItem[] = [
    {
        title: 'this list, to begin with ...'
    }
];

class UnderConstructionCard extends React.Component<WithStyles<Classes>, UnderConstructionCardState> {

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const classes = this.props.classes;
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Timelapse />
                    }
                    title="Website under (re-)construction"
                    subheader="With big chunks of React inside !"
                />
                <CardContent className={classes.media}>
                    <video
                        width="320"
                        height="320"
                        autoPlay
                        loop
                        muted
                        poster={poster}
                        className={classes.gif}
                    >
                        <source type="video/mp4" src={video} />
                        Your browser does not support HTML5 video tag.
                                <a href="https://gph.is/1ZidoAN">
                            Click here to view original GIF
                                </a>
                    </video>
                </CardContent>
                <CardContent>
                    <Typography variant="body2">
                        Features will arrive piece by piece.
                    </Typography>
                    <Typography>
                        So, take a drink, relax, and be patient. And above all, come back as often as possible !
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <Typography variant="caption">
                        More info on current and futur developments
                    </Typography>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit className={classes.details}>
                    <CardContent>
                        <Typography paragraph variant="body2">
                            My "TO (Mebbe) DO" list
                        </Typography>
                        <FakeChecklist items={todoList} />
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)<{}>(UnderConstructionCard);