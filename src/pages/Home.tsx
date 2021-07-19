import {
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, {FC, ReactElement, useEffect, useLayoutEffect} from "react";
import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import {Tweet} from "../components/Tweet";
import SideMenu from "../components/SideBar/SideMenu";
import { AddTweetForm } from "../components/AdTwitterForm";
import { Tags } from "../components/Tags";
import { Users } from "../components/Users";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { SearchTextField } from "../components/SearchTextField";
import { Hidden } from "@material-ui/core";
import cn from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {TweetsActions} from "../store/ducks/tweets/actions";
import {selectIsTweetsLoaded, selectTweetsItems} from "../store/ducks/tweets/selectors";
import {Tweet as TweetItem} from "../store/ducks/tweets/contracts/state";
import {Tag as TagItem} from "../store/ducks/tags/contracts/state";
import CircularProgress from '@material-ui/core/CircularProgress';
import {TagsActions} from "../store/ducks/tags/actions";
import {selectIsTagsLoaded, selectTagsItems} from "../store/ducks/tags/selectors";
import {Link, Route} from 'react-router-dom';
import {BackButton} from "../components/BackButton";
import FullTweet from "./components/FullTweet";

export const useHomeStyles = makeStyles((theme:Theme) => ({
  wrapper: {},
  gridWrapper: {
    display:'flex',
    alignItems: 'flex-start',
    height: '100%',
    marginTop: 0,
  },
  sticky: {
    position: 'sticky',
    top: 0,
    paddingTop: '0px!important',
  },
  content: {
    height: '100%',
  },
  leftSide: {
    flex: '0 1 250px'
  },
  rightSide: {
    flex: '0 1 348px',
    minWidth: 72,
    boxSizing: 'border-box'
  },
  tweetsWrapper: {
    height: '100%',
    borderRadius: 0,
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderTop: 0,
    borderBottom:0,
  },
  header: {
    height: 58,
    padding: '12px 16px',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    boxSizing: 'border-box',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 800,
  },
  linkBack: {
    display: 'inline-flex',
    alignItems: 'center',
    '&>*:first-child': {
      margin: '-10px',
      padding: 10,
    },
  },
  addTweetFormWrapper: {
    padding: '12px 16px',
    boxSizing: 'border-box',
    border: 0,
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
  searchWrapper: {
    paddingTop:8
  },
  progress: {
    display: 'flex',
    padding: '40px 20px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
  },
}));

export const Home: FC = ():ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch()
  const tweets:TweetItem[] = useSelector(selectTweetsItems);
  const tags:TagItem[] = useSelector(selectTagsItems);

  const isLoaded:boolean = useSelector(selectIsTweetsLoaded);
  const isTagLoaded:boolean = useSelector(selectIsTagsLoaded);

  useEffect(() => {
    dispatch(TweetsActions.fetchTweets());
    dispatch(TagsActions.fetchTags())
  }, [dispatch])

  useLayoutEffect(() => {
      window.scrollTo(0, 0)
  }, []);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid className={classes.gridWrapper} container spacing={3} justify="center" >
        <Grid item xs={1} md="auto" className={cn(classes.sticky, classes.leftSide)}>
          <SideMenu />
        </Grid>
        <Grid item xs={11} md={6} className={cn(classes.sticky, classes.content)}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.header} variant="outlined">
              <Route path="/home" exact>
                <Typography className={classes.headerTitle} variant="h6">Главная</Typography>
              </Route>
              <Route path="/home/:any">
                <div className={classes.linkBack}>
                  <BackButton />
                  <Typography className={classes.headerTitle} variant="h6">Твитнуть</Typography>
                </div>
              </Route>
            </Paper>
            <Route path={["/home", "/home/search"]} exact>
              <>
                <Paper className={classes.addTweetFormWrapper} variant="outlined">
                  <AddTweetForm />
                </Paper>
                <div className={classes.addFormBottomLine} />
              </>
            </Route>
            <Route path="/home" exact>
              {!isLoaded
                ? <div className={classes.progress}><CircularProgress /></div>
                : tweets.map((tweet: TweetItem) => (
                  <Link
                    key={tweet._id}
                    to={`home/tweet/${tweet._id}`}
                    className={classes.link}
                  >
                    <Tweet
                      user={tweet.user}
                      text={tweet.text}
                    />
                  </Link>
                ))}
            </Route>
            <Route path="/home/tweet/:tweetId">
              <FullTweet classes={classes} />
            </Route>
          </Paper>
        </Grid>
        <Hidden mdDown>
          <Grid item md="auto" className={cn(classes.sticky, classes.rightSide)}>
            <div className={classes.searchWrapper}>
              <SearchTextField
                variant="outlined"
                placeholder="Поиск по Твиттеру"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </div>
            <Tags items={tags} isLoaded={isTagLoaded} />
            <Users />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}
