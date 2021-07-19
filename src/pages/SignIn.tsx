import {Button, TextField, Theme, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, {FC, ReactElement, useState} from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';
import { FormGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import {ModalBlock} from "../components/ModalBlock";


export const useStylesSignIn = makeStyles((theme:Theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  infoSide: {
    position: 'relative',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71C9F8',
    overflow: 'hidden',
  },
  infoSideBigIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350%',
    height: '350%',
  },
  infoSideList: {
    position: 'relative',
    width: 380,
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  infoSideListItem: {
    marginBottom: 40,
    '& h6': {
      display: 'flex',
      color: "#ffffff",
      fontSize: 20,
      fontWeight: 700
    }
  },
  infoSideIcon: {
    marginRight: 16,
    fontSize: 32
  },
  loginSide: {
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginSideWrapper: {
    width: 380
  },
  loginSideTwitterIcon: {
    marginBottom: 20,
    fontSize: 45,
  },
  loginSideTitle: {
    marginBottom: 48,
    fontWeight: 700,
    fontSize: 32
  },
  loginSideRegister: {
    marginBottom: theme.spacing(4)
  },
  loginSideField: {
    marginBottom: theme.spacing(4)
  },
  registerField: {
    marginBottom: theme.spacing(8)
  }
}));

export const SignIn:FC = ():ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();

  const handleClickOPenSignIn = (): void => {
    setVisibleModal('signIn');
  }

  const handleClickOPenSignUp = (): void => {
    setVisibleModal('signUp');
  }

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  }

  return (
    <div className={classes.wrapper}>
      <section className={classes.infoSide}>
        <TwitterIcon color="primary" className={classes.infoSideBigIcon} />
        <ul className={classes.infoSideList}>
          <li className={classes.infoSideListItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.infoSideIcon} />
              Читайте о том, что вам что интересно.
            </Typography>
          </li>
          <li className={classes.infoSideListItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.infoSideIcon} />
              Узнайте, о чём говорят в мире.
            </Typography>
          </li>
          <li className={classes.infoSideListItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.infoSideIcon}/>
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
          <Typography className={classes.loginSideTitle} variant="h4">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>
              Присоединяйтесь к Твиттеру прямо сейчас!
            </b>
          </Typography>
          <br/>
          <Button
            className={classes.loginSideRegister}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClickOPenSignUp}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleClickOPenSignIn}
          >
            Войти
          </Button>

          <ModalBlock
            title="Войти в Твиттер"
            classes={classes}
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
          >
            <form onSubmit={(event => event.preventDefault())}>
              <FormControl component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                  <TextField
                    autoFocus
                    id="email"
                    label="E-mail"
                    type="email"
                    fullWidth
                    variant="filled"
                    InputLabelProps={{shrink: true}}
                    className={classes.loginSideField}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Пароль"
                    type="password"
                    fullWidth
                    variant="filled"
                    InputLabelProps={{shrink: true}}
                    className={classes.loginSideField}
                  />
                </FormGroup>
              </FormControl>
            </form>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              className={classes.loginSideField}
              onClick={handleCloseModal}>
              Войти
            </Button>
          </ModalBlock>

          <ModalBlock
            title="Создайте учетную запись"
            classes={classes}
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
          >
            <form onSubmit={(event => event.preventDefault())}>
              <FormControl component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                  <TextField
                    autoFocus
                    id="name"
                    label="name"
                    type="name"
                    fullWidth
                    variant="filled"
                    InputLabelProps={{shrink: true}}
                    className={classes.registerField}
                  />
                  <TextField
                    autoFocus
                    id="email"
                    label="E-mail"
                    type="email"
                    fullWidth
                    variant="filled"
                    InputLabelProps={{shrink: true}}
                    className={classes.registerField}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Пароль"
                    type="password"
                    fullWidth
                    variant="filled"
                    InputLabelProps={{shrink: true}}
                    className={classes.registerField}
                  />
                </FormGroup>
              </FormControl>
            </form>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              className={classes.loginSideField}
              onClick={handleCloseModal}>
              Далее
            </Button>
          </ModalBlock>
    </div>
      </section>
    </div>
  )
}