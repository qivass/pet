import React, {ReactElement} from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {makeStyles, Theme} from "@material-ui/core";
import { FC } from 'react';

interface UsersProps {
}

const useUsersStyles = makeStyles((theme:Theme) => ({
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
}));

export const Users: FC<UsersProps> = (props: UsersProps):ReactElement => {
  const classes = useUsersStyles();
  
  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Кого читать</b>
      </Paper>
      <List>
        <ListItem className={classes.rightSideBlockItem}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Dock Of Shame"
            secondary={
              <Typography component="span" variant="body2" color="textSecondary">
                @FavDockOfShame
              </Typography>
            }
          />
          <Button color="primary">
            <PersonAddIcon />
          </Button>
        </ListItem>
        <Divider component="li" />
      </List>
    </Paper>
  )
}
