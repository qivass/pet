import React, {FC, ReactElement} from "react";
import {
  Avatar,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Theme,
  Typography
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepostIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Reply";
import {grey} from "@material-ui/core/colors";

const useHomeStyles = makeStyles((theme:Theme) => ({
  tweetWrapper: {
    padding: '12px 16px',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    boxSizing: 'border-box',
    '&:hover': {
      background: 'rgb(245,248,250)'
    }
  },
  tweet: {
    cursor: 'pointer',
  },
  avatar: {
    width: 48,
    height: 48,
    boxShadow: '0 0 0 2px #6a6a6a inset',
  },
  tweetContent:{
    marginLeft: 8,
  },
  tweetTitle: {
    marginBottom: 2,
    fontSize: 15,
    '& span': {
      color: grey[500],
    }
  },
  tweetText: {
    fontSize: 15,
  },
  tweetIconsWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 425,
    width: '100%',
    margin: ' 12px 0 0 -12px',
  },
  tweetIcon: {
    position: 'relative',
    padding: 8,
    fontSize: 13,
    '&:hover': {
      color: 'rgb(29, 161, 242)'
    },
    '& div': {
      position: 'absolute',
      right: '-26px',
      top: '50%',
      transform: 'translateY(-50%)',
    }
  }
}));

export interface TweetProps {
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  },
  text: string,
}

export const Tweet: FC<TweetProps> = ({user, text}:TweetProps):ReactElement => {
  const classes = useHomeStyles();
  return (
      <Paper className={classes.tweetWrapper} variant="outlined">
          <Grid className={classes.tweet} container>
          <Grid item xs={1}>
            <Avatar
              className={classes.avatar}
              alt={`${user.fullname}`}
              src={user.avatarUrl}
            />
          </Grid>
          <Grid className={classes.tweetContent} item xs={10}>
            <Typography className={classes.tweetTitle} variant="body1" component="p">
              <b>{user.fullname}&nbsp;</b>
              <span>{`@${user.username} · 18 апр.`}</span>
            </Typography>
            <Typography className={classes.tweetText} variant="body1" component="p">
              {text}
            </Typography>
            <div className={classes.tweetIconsWrap}>
              <IconButton className={classes.tweetIcon} aria-label="comment">
                <CommentIcon style={{fontSize: 18}}/>
                <div>123</div>
              </IconButton>
              <IconButton className={classes.tweetIcon} aria-label="comment">
                <RepostIcon style={{fontSize: 18}}/>
                <div>10</div>
              </IconButton>
              <IconButton className={classes.tweetIcon} aria-label="comment">
                <LikeIcon style={{fontSize: 18}}/>
                <div>566</div>
              </IconButton>
              <IconButton className={classes.tweetIcon} aria-label="comment">
                <ShareIcon style={{fontSize: 18}}/>
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Paper>
  )
}