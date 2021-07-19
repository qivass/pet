import React, { Fragment } from 'react';
import {makeStyles, Paper, Theme, Typography} from '@material-ui/core';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider/Divider';
import { ReactElement } from 'react';
import {Tag as TagItem} from "../store/ducks/tags/contracts/state";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from 'react-router-dom';

interface TagsProps {
  items: TagItem[];
  isLoaded: boolean;
}

const useTagStyles = makeStyles((theme:Theme) => ({
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
    padding: 0,
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
  link: {
    width: '100%',
    height: '100%',
    padding: '8px 16px',
    textDecoration: 'none',
    color: 'inherit',
  },
  progress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
  }
}));

export const Tags: React.FC<TagsProps> = (props:TagsProps): ReactElement | null => {
  const {items, isLoaded} = props;
  const classes = useTagStyles()

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {!isLoaded
          ? <div className={classes.progress}><CircularProgress /></div>
          : (items.map((tag: TagItem) => (
            <Fragment key={tag._id}>
              <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${tag.name}`} className={classes.link}>
                <ListItemText
                  primary={tag.name}
                  secondary={
                    <Typography component="span" variant="body2">
                      Твитов: {tag.count}
                    </Typography>
                  }
                />
              </Link>
              </ListItem>
              <Divider component="li" />
            </Fragment>
            )))
        }
      </List>
    </Paper>
  );
};
