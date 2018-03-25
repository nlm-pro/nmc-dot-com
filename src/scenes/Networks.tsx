import * as React from 'react';
import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles';
import store from '../store';
import { shellActions } from '../redux/shell';
import SocialCard, { SocialCardProps } from '../components/SocialCard';
import twitterLogo from '../assets/social/twitter-logo.png';
import twitterPanel from '../assets/social/blue-bird.jpg';
import octocat from '../assets/social/droidtocat.png';
import ghMark from '../assets/social/GitHub-Mark.png';
import linkedInCover from '../assets/social/brainstorming.png';
import linkedInLogo from '../assets/social/linkedin-logo.png';
import { Grid, Typography, IconButton } from 'material-ui';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import SendIcon from 'material-ui-icons/Send';

type Classes = 'root' | 'button' | 'leftIcon';

const styles: StyleRulesCallback<Classes> = theme => ({
    root: {
        padding: 12,
    },
    button: {
        // margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
});

type AboutState = {};

class About extends React.Component<WithStyles<Classes>, AboutState> {

    componentDidMount() {
        store.dispatch(shellActions.setTitle('Networks'));
    }

    render() {
        const { classes } = this.props;

        const cardsProps: Array<SocialCardProps & { content: JSX.Element | string }> = [
            {
                name: 'twitter',
                title: 'Twitter',
                subheader: '@noel_mace',
                image: twitterPanel,
                logo: twitterLogo,
                href: 'https://twitter.com/noel_mace',
                content: (
                    <Typography variant="body1" align="justify">
                        <p>
                            At the end of 2017, I decided to return to Twitter,
                            almost exclusively for development-related discussions.
                        </p>
                        <p>
                            Most of my posts are now in English.
                        </p>
                    </Typography>
                ),
                actions: (
                    <div>
                        <IconButton
                            className={classes.button}
                            aria-label="Follow"
                            href="https://twitter.com/noel_mace?ref_src=twsrc%5Etfw"
                        >
                            <PersonAddIcon className={classes.leftIcon} />
                        </IconButton>
                        <IconButton
                            className={classes.button}
                            aria-label="Mention"
                            href="https://twitter.com/intent/tweet?screen_name=noel_mace&ref_src=twsrc%5Etfw"
                        >
                            <SendIcon className={classes.leftIcon} />
                        </IconButton>
                    </div>
                ),
            },
            {
                name: 'github',
                title: 'GitHub',
                subheader: 'noelmace',
                image: octocat,
                logo: ghMark,
                href: 'https://github.com/noelmace',
                content: (
                    <Typography variant="body1" align="justify">
                        <p>
                            Like any of you, I love Github !
                        </p>
                        <p>
                            This is for me the best place where to make technological watch,
                            to find great projects to use (or, even better, to contribute to).
                        </p>
                        <p>
                            It's even, from my perspective, one of the best places where to find
                            technical issues solutions ! Yes, even better than StackOverflow,
                            given that I only use open source libraries, and as much FOSS sofwares as possible).
                        </p>
                    </Typography>
                ),
            },
            {
                name: 'linkedin',
                title: 'LinkedIn',
                subheader: 'noelmace',
                image: linkedInCover,
                logo: linkedInLogo,
                href: 'https://www.linkedin.com/in/noelmace/',
                content: (
                    <div>
                        <Typography variant="body1" align="justify">
                            <p>
                                Ok, LinkedIn is far from being my favorite networking place. I go there very little,
                                and I write hardly a post per year.
                            </p>
                            <p>
                                But it is a good solution to keep in touch with professional contacts,
                                or to make from time to time (recruiters excluded) new contacts.
                            </p>
                            <p>
                                So, if you think we have worked (or could work) together someday, do not hesitate to
                                send a request.
                            </p>
                        </Typography>
                    </div>
                ),
            },
        ];

        const cards = cardsProps.map((data, i) => {
            const { content, ...realProps } = data;
            return (
                <Grid item lg={4} md={6} xs={12} key={i}>
                    <SocialCard {...realProps}>
                        {content}
                    </SocialCard>
                </Grid >
            );
        });

        return (
            <Grid
                container
                alignItems="stretch"
                justify="flex-start"
                spacing={24}
                className={classes.root}
            >
                {cards}
            </Grid>
        );
    }
}

export default withStyles(styles)<{}>(About);
