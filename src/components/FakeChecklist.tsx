import CheckCircleIcon from 'material-ui-icons/CheckCircle';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import * as React from 'react';

type ChecklistItem = { title: string, text?: string };

type FakeChecklistProps = { items: ChecklistItem[] };

const FakeChecklist: React.SFC<FakeChecklistProps> = (props) => (
    <List dense>
        {props.items.map(item => (

            <ListItem>
                <ListItemIcon>
                    <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                    primary={item.title}
                    secondary={item.text}
                />
            </ListItem>

        ))}
    </List>
);

export default FakeChecklist;