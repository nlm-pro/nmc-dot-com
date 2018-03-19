import * as React from 'react';
import { Branche, AsyncCommitDates, getCommitDates } from '../../redux/git';
import { RootState } from '../../redux';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui';
import { Moment } from 'moment';
import { CommitDateCard } from './CommitDateCard';

interface CommitDateCardOwnProps {
    branche: Branche;
}
interface CommitDateCardStateProps {
    commitDates: AsyncCommitDates;
}
type Props = CommitDateCardOwnProps & CommitDateCardStateProps;

const Messages = {
    [Branche.master]: 'These version has been published',
    [Branche.develop]: 'Last "in progress" development was committed (and pushed to Github)',
};

// FIXME : state optimisation (for now, the component reload for any branch)
const ConnectedCommitDateCard: React.SFC<Props> = (props: Props) => {
    const { branche, commitDates } = props;
    const date = commitDates[branche].data as Moment;
    const loading = !date || commitDates[branche].isFetching;
    return loading ? <CircularProgress /> : <CommitDateCard message={Messages[branche]} initialDate={date} />;
};

const mapStateToProps = (state: RootState) => ({
    commitDates: getCommitDates(state),
});

export default
    connect<CommitDateCardStateProps, {}, CommitDateCardOwnProps, {}>(mapStateToProps)(ConnectedCommitDateCard);
