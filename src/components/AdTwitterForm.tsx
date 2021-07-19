import React, {FormEvent, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { ReactElement } from 'react';
import { FC } from 'react';
import {Grid, IconButton, makeStyles} from '@material-ui/core';
import { Theme } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/CropOriginal';
import SmileIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {useDispatch} from "react-redux";
import {TweetsActions} from "../store/ducks/tweets/actions";

export const useAdTwitterStyles = makeStyles((theme: Theme) => ({
  adTweet: {
    display: 'flex',
    flexWrap: 'nowrap',
    cursor: 'pointer',
  },
  addForm:{
    marginLeft: 8,
  },
  tweetAvatar: {
    marginRight: 15,
    width: 48,
    height: 48,
    boxShadow: '0 0 0 2px #6a6a6a inset',
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormFooterLeftBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  addTweetIconBtn: {
    position: 'relative',
    padding: 8,
    fontSize: 22,
    '&:hover': {
      color: 'rgb(29, 161, 242)'
    },
  },
  addTweetIcon: {
    fontSize: 22
  },
  addFormFooterRightBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
  circularSubstrate: {
    color: 'rgba(0, 0, 0, 0.1)',
  }
}));

interface AddTweetFormProps {
  maxRows?: number;
  rows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm:FC<AddTweetFormProps> = ({maxRows, rows=2}: AddTweetFormProps):ReactElement => {
  const dispatch = useDispatch();
  const classes = useAdTwitterStyles();
  const [text, setText] = useState<string>('');
  const textLimitPercent = text.length / MAX_LENGTH * 100;

  const handleChangeTextarea = (event: FormEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  }

  const handleClickAddTweet = (): void => {
    dispatch(TweetsActions.fetchAddTweet(text));
  }

  return (
    <>
        <Grid className={classes.adTweet} container>
          <Grid item xs={1}>
            <Avatar
              className={classes.tweetAvatar}
              alt="Аватар пользователя"
              src="https://pic.rutube.ru/user/fa/12/fa121b5aa7fb54aeff232d9355375948.jpg"
            />
          </Grid>
          <Grid className={classes.addForm} item xs={11}>
            <TextareaAutosize
              className={classes.addFormTextarea}
              placeholder="Что происходит?"
              rows={rows}
              rowsMax={maxRows}
              value={text}
              maxLength={MAX_LENGTH}
              onChange={handleChangeTextarea}
            />
            <div className={classes.addFormFooter}>
              <div className={classes.addFormFooterLeftBlock}>
                <IconButton className={classes.addTweetIconBtn} aria-label="comment">
                  <ImageIcon color="primary" className={classes.addTweetIcon} />
                </IconButton>
                <IconButton className={classes.addTweetIconBtn} aria-label="comment">
                  <SmileIcon color="primary" className={classes.addTweetIcon} />
                </IconButton>
              </div>
              <div className={classes.addFormFooterRightBlock}>
                {text.length
                  ? (<>
                      <span>{MAX_LENGTH - text.length}</span>
                      <div className={classes.addFormCircleProgress}>
                        <CircularProgress
                          variant="determinate"
                          size={20}
                          thickness={5}
                          value={textLimitPercent}
                        />
                        <CircularProgress
                          variant="determinate"
                          className={classes.circularSubstrate}
                          size={20}
                          thickness={5}
                          value={100}
                        />
                      </div>
                    </>)
                  : null}
                <Button
                  disabled={!text}
                  color="primary"
                  variant="contained"
                  onClick={handleClickAddTweet}
                >
                  Твитнуть
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
    </>
  );
};
