import Checkbox from 'material-ui-icons/CheckBox';
import CheckBoxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import * as React from 'react';

export type ChecklistItem = { title: string, checked?: boolean; text?: string };
export type FakeChecklistProps = { items: ChecklistItem[] };

const FakeChecklist: React.SFC<FakeChecklistProps> = (props) => (
    <List dense>
        {props.items.map((item, key) => (

            <ListItem key={key}>
                <ListItemIcon>
                    {item.checked ? <Checkbox /> : <CheckBoxOutlineBlank />}
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