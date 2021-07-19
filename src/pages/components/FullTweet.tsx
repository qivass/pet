import React, {FC, ReactElement, useEffect} from 'react';
import {Tweet} from '../../components/Tweet';
import {Tweet as TweetProps} from "../../store/ducks/tweets/contracts/state";
import {useDispatch, useSelector} from "react-redux";
import {selectIsTweetLoaded, selectTweetData} from "../../store/ducks/tweet/selectors";
import CircularProgress from "@material-ui/core/CircularProgress";
import {TweetActions} from "../../store/ducks/tweet/actions";
import {useParams} from 'react-router-dom';
import {useHomeStyles} from '../Home';

interface FullTweetProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const FullTweet:FC<FullTweetProps> = (props:FullTweetProps):ReactElement => {
  const {classes} = props;
  const {tweetId}: any = useParams();
  const tweet: TweetProps = useSelector(selectTweetData);
  const isTweetLoaded: boolean = useSelector(selectIsTweetLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TweetActions.fetchTweetData(tweetId))

    return () => {
      dispatch(TweetActions.resetTweetData())
    }
  }, [dispatch, tweetId])

  return (
    <>
      {isTweetLoaded
        ? (<Tweet key={tweet._id}  user={tweet.user} text={tweet.text}/>)
        : (<div className={classes.progress}><CircularProgress/></div>)
      }
    </>
  )
}

export default FullTweet;