import * as React from 'react';
import { Moment } from 'moment';
import SimpleTimer from './SimpleTimer';
import Typography from 'material-ui/Typography/Typography';
import CardContent from 'material-ui/Card/CardContent';

interface CommitDateCardProps {
    message: string;
    initialDate: Moment;
}

export const CommitDateCard: React.SFC<CommitDateCardProps> = (props) => {
    const { message, initialDate } = props;
    return (
        <CardContent>
            <Typography variant="body2">
                {message || ''}
            </Typography >
            <SimpleTimer initialDate={initialDate} />
        </CardContent >
    );
};
