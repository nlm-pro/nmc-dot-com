import * as React from 'react';
import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles';
import store from '../store';
import { shellActions } from '../redux/shell';
import Giphy from '../components/Giphy';

type Classes = 'about' | 'gif';

const styles: StyleRulesCallback<Classes> = theme => ({
    about: {
        padding: 12,
    },
    gif: {
        maxWidth: '100%',

    },
});

type AboutState = {};

class About extends React.Component<WithStyles<Classes>, AboutState> {

    componentDidMount() {
        store.dispatch(shellActions.setTitle('About me'));
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.about}>
                <Giphy
                    video="https://media.giphy.com/media/Yl5aO3gdVfsQ0/giphy.mp4"
                    altHref="http://gph.is/1OLGL5d"
                    videoClass={classes.gif}
                    poster="https://media.giphy.com/media/Yl5aO3gdVfsQ0/giphy_s.gif"
                />
            </div>
        );
    }
}

export default withStyles(styles)<{}>(About);
