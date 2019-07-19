import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import googleSignInButton from './btn_google_light_pressed_ios.svg';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        textTransform: 'none',
    },
    googleSignInButton: {
        padding: 0,
        backgroundColor: '#FFFFFF',
    },
    googleSignInText: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 0.54)',
        padding: '0 10px 0 0',
        textTransform: 'none',
    }
}));

const SignIn: React.FC = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
                <Typography component="h1" variant="h5">Sign in</Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >Sign In</Button>
                    <Button
                        variant="contained"
                        href="http://localhost:8888/api/sign-in-with-google"
                        className={classes.googleSignInButton}
                    >
                        <img src={googleSignInButton} alt="Google Sign In"/>
                        <Typography variant='button' className={classes.googleSignInText}>Sign in with Google</Typography>
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default SignIn;