import { WithStyles, StyleRulesCallback, Typography } from 'material-ui';
import * as React from 'react';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import { CardActions, IconButton, Collapse } from 'material-ui';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Timelapse from 'material-ui-icons/Timelapse';
import * as classnames from 'classnames';
import poster from './its-alive.gif';
import video from './its-alive.mp4';
import withStyles from 'material-ui/styles/withStyles';
import FakeChecklist from '../FakeChecklist';
import todoList from './todoList';
import Giphy from '../Giphy';

type Classes = 'card' | 'actions' | 'expand' | 'expandOpen' | 'details' | 'media' | 'gif' | 'ghRibbon';
type UnderConstructionCardState = { expanded: boolean };

const styles: StyleRulesCallback<Classes> = theme => ({
    card: {
        textAlign: 'center',
        position: 'relative',
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
    },
    ghRibbon: {
        position: 'absolute',
        top: 0,
        right: 0,
        border: 0,
    }
});

class UnderConstructionCard extends React.Component<WithStyles<Classes>, UnderConstructionCardState> {

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const classes = this.props.classes;
        return (
            <Card className={classes.card}>
                <a href="https://github.com/noelmace/nmc-dot-com">
                    <img
                        className={classes.ghRibbon}
                        src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
                        alt="Fork me on GitHub"
                    />
                </a>
                <CardHeader
                    avatar={
                        <Timelapse />
                    }
                    title="Don't expect a complete website."
                    subheader="This is just one of my toys I (sometime) play with."
                />
                <CardContent className={classes.media}>
                    <Giphy
                        video={video}
                        poster={poster}
                        videoClass={classes.gif}
                        altHref="https://gph.is/1ZidoAN"
                    />
                </CardContent>
                <CardContent>
                    <Typography variant="body2">
                        This version was created to test some React features.
                    </Typography>
                    <Typography>
                        That being said, you should still find the informations you were looking for.
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <Typography variant="caption">
                        More info about this project
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
                            Some things I could (mebbe) add someday
                        </Typography>
                        <FakeChecklist items={todoList} />
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)<{}>(UnderConstructionCard);
