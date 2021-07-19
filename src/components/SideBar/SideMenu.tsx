import React, {FC, ReactElement, useState} from "react";
import {Button, Hidden, IconButton, makeStyles, Paper, Theme, Typography} from "@material-ui/core";
import cn from "classnames";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PersonOutlineOutlined";
import CreateIcon from '@material-ui/icons/Create';
import { AddTweetForm } from "../AdTwitterForm";
import { ModalBlock } from "../ModalBlock";
import useMedia from "use-media";
import { Link } from "react-router-dom";

const useHomeStyles = makeStyles((theme:Theme) => ({
  sideMenulist: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      '@media (max-width:960px)': {
        textAlign: 'center',
      },
    },
  },
  logo: {
    fontSize: 36,
  },
  sideMenuButton:{
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 20px 10px 10px',
    borderRadius: 30,
    color: '#14171a',
    '&:hover': {
      color: 'rgb(29, 161, 242)',
      background: 'rgba(29, 161, 242, .1)'
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
  },
  sideMenuLogo: {
    padding: 8,
    borderRadius: 50,
  },
  sideMenuIcon: {
    fontSize: 28,
  },
  sideMenuText: {
    margin: '0 0 0 20px',
    fontSize: 20,
    fontWeight: 700,
  },
  tweetBtn: {
    marginTop: 10,
    '& .MuiButton-label': {
      width: 'initial',
    }
  },
  tweetBtnMobile: {
    '@media (max-width:960px)': {
      minWidth: 'initial',
      width: 'auto',
      padding: 10
    },
  },
  modal: {
    width: 550,
  }
}));

const SideMenu: FC = (): ReactElement => {
  const classes = useHomeStyles();
  const isMobile = useMedia({ maxWidth: 960 });
  const [visibleAddTweet, setSetVisibleAddTweet] = useState<boolean>(false);

  const toggleAddTweet = () => {
  setSetVisibleAddTweet(!visibleAddTweet);
  };

  return (
    <Paper>
      <ul className={classes.sideMenulist}>
        <li>
          <Link to="/home">
          <IconButton className={cn(classes.sideMenuButton, classes.sideMenuLogo)} color="default">
            <TwitterIcon className={classes.logo} color="primary" />
          </IconButton>
          </Link>
        </li>
        <li>
          <IconButton className={classes.sideMenuButton} color="primary">
            <SearchIcon className={classes.sideMenuIcon}/>
            <Hidden smDown>
              <Typography className={classes.sideMenuText} paragraph>
                Поиск
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          <IconButton className={classes.sideMenuButton} color="primary">
            <NotificationIcon className={classes.sideMenuIcon}/>
            <Hidden smDown>
              <Typography className={classes.sideMenuText} paragraph>
                Уведомления
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          <IconButton className={classes.sideMenuButton} color="primary">
            <MessageIcon className={classes.sideMenuIcon}/>
            <Hidden smDown>
              <Typography className={classes.sideMenuText} paragraph>
                Сообщения
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          <IconButton className={classes.sideMenuButton} color="primary">
            <BookmarkIcon className={classes.sideMenuIcon}/>
            <Hidden smDown>
              <Typography className={classes.sideMenuText} paragraph>
                Закладки
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          <IconButton className={classes.sideMenuButton} color="primary">
            <ListIcon className={classes.sideMenuIcon}/>
            <Hidden smDown>
              <Typography className={classes.sideMenuText} paragraph>
                Списки
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          <IconButton className={classes.sideMenuButton} color="primary">
            <UserIcon className={classes.sideMenuIcon}/>
            <Hidden smDown>
              <Typography className={classes.sideMenuText} paragraph>
                Профиль
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          <Button
            className={cn(classes.tweetBtn, {[classes.tweetBtnMobile] : isMobile})}
            variant="contained"
            color="primary"
            fullWidth={!isMobile}
            onClick={toggleAddTweet}
          >
            <Hidden smDown>
              Твитнуть
            </Hidden>
            <Hidden mdUp>
              <CreateIcon />
            </Hidden>
          </Button>
          <ModalBlock
            visible={visibleAddTweet}
            onClose={toggleAddTweet}
          >
            <div className={classes.modal}>
              <AddTweetForm rows={6} maxRows={15}  />
            </div>
          </ModalBlock>
        </li>
      </ul>
    </Paper>
  )
}

export default SideMenu