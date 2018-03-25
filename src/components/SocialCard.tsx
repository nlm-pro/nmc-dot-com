import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import { StyleRulesCallback, WithStyles, Avatar, IconButton, Collapse } from 'material-ui';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import * as classNames from 'classnames';

type Classes = 'card' | 'media' | 'actions' | 'avatar' | 'header' | 'headerContent' | 'expand' | 'expandOpen';

const styles: StyleRulesCallback<Classes> = theme => ({
    card: {
    },
    avatar: {
        margin: 10,

    },
    media: {
        height: 194,
    },
    actions: {
        display: 'flex',
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
    header: {
        textDecoration: 'none',
        display: 'flex',
    },
    headerContent: {
        flex: 1,
        borderRadius: '2px',
        margin: theme.spacing.unit,
        transition: [
            {
                property: 'background-color',
                duration: '250ms',
                timingFuntion: 'cubic-bezier(0.4, 0, 0.2, 1)',
                delay: '0ms'
            },
            {
                property: 'box-shadow',
                duration: '250ms',
                timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                delay: '0ms'
            }
        ],
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
        }
    },
});

export interface SocialCardProps {
    name: string;
    image: any;
    imgTitle?: string;
    title: JSX.Element | string;
    subheader: JSX.Element | string;
    actions?: JSX.Element;
    logo: any;
    href: string;
}

interface SocialCardState {
    expanded: boolean;
}

type Props = WithStyles<Classes> & SocialCardProps;

class SocialCard extends React.Component<Props, SocialCardState> {

    constructor(props: Props) {
        super(props);
        this.state = { expanded: false };
    }

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const {
            name, classes, children, image, imgTitle, title, subheader, logo, actions, href
        } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <a href={href} className={classes.header}>
                        <CardHeader
                            className={classes.headerContent}
                            action={
                                <IconButton>
                                    <ChevronRightIcon />
                                </IconButton>
                            }
                            avatar={
                                <Avatar
                                    alt={name}
                                    src={logo}
                                    className={classes.avatar}
                                />
                            }
                            title={title}
                            subheader={subheader}
                        />
                    </a>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={imgTitle}
                    />

                    <CardActions className={classes.actions} disableActionSpacing>
                        {actions}
                        <IconButton
                            className={classNames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    {children &&
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                {children}
                            </CardContent>
                        </Collapse>
                    }
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)<SocialCardProps>(SocialCard);