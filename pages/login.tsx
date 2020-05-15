import React, { useState, useEffect, ReactElement } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'

import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { ParsedUrlQuery } from 'querystring'
import { isLoggedIn, setToken } from '../utils/login_store'
import { login, getToken } from '../services/auth.service'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Login(): ReactElement {
  const router = useRouter()
  const classes = useStyles()
  const [errMessage, setErrMessage] = useState('')

  useEffect(() => {
    if (router.query.code) getTokenFromQuery(router.query)
    if (isLoggedIn()) {
      router.push('/')
    }
  }, [])

  const getTokenFromQuery = async ({ code }: ParsedUrlQuery): Promise<void> => {
    try {
      const body = await getToken(code)
      setToken(body.access_token)
      router.push('/')
    } catch (err) {
      setErrMessage(err.status)
    }
  }

  const loginClicked = async (): Promise<void> => {
    try {
      const body = await login()
      window.location.href = body.url
    } catch (err) {
      setErrMessage(err)
    }
  }

  if (router.query.code) getTokenFromQuery(router.query)
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <div> LOGO </div>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginClicked}
          >
            Sign In or Sign Up
          </Button>
          <i>
            {' '}
            Sign in or signup up by connecting your Spotify account. You cannot
            use the application without an account. We rely on Spotify for our
            music library
          </i>
        </div>
        <Snackbar
          open={!!errMessage}
          autoHideDuration={3000}
          onClose={(): void => {
            setErrMessage('')
          }}
        >
          <Alert severity="error">{errMessage}</Alert>
        </Snackbar>
      </Grid>
    </Grid>
  )
}
