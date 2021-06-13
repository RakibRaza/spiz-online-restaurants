import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import ContinueWith from "../components/ContinueWith/ContinueWith";
import { useAuthContext } from "../context/AuthContext";
import { Alert } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)",
    margin: theme.spacing(15, 0, 5),
  },
  checkbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: theme.spacing(2, 0),
  },
  link: {
    fontWeight: "bold",
    "& a": {
      color: theme.palette.primary.main,
    },
  },
}));
const Login = () => {
  const classes = useStyles();
  const { logIn } = useAuthContext();
  const location = useLocation();
  const history = useHistory();
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  let { from } = location.state || { from: { pathname: "/" } };
  const onSubmit = async (data) => {
    try {
      setError("");
      await logIn(data.email, data.password);
      history.replace(from);
    } catch (error) {
      setError("No user Found.");
    }
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm">
        <Paper component={Box} p={3}>
          <Typography
            gutterBottom
            style={{ fontWeight: "bold" }}
            variant="h5"
          >
            Login
          </Typography>
          {error && (
            <Alert variant="filled" severity="error">
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              label="Email"
              fullWidth
              {...register('email', {
                required: 'Email is required.', pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email",
                }
              })}
              helperText={errors.email?.message}
              error={Boolean(errors.email)}
            />
            <TextField
              margin="normal"
              label="Password"
              fullWidth
              type="password"
              {...register('password', {
                required: "Password is required.",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message:
                    "Password must contains letter number and mninum 6 caracters",
                }
              })}
              helperText={errors.password?.message}
              error={Boolean(errors.password)}
            />
            <Box className={classes.checkbox}>
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
              <Typography className={classes.link}>
                <NavLink to="/forgot-password">Forgot Password</NavLink>
              </Typography>
            </Box>
            <Box my={3}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Box>
            <Typography className={classes.link} align="center">
              Don't have an account ?{" "}
              <NavLink to="/signup"> Create an account</NavLink>
            </Typography>
          </form>
        </Paper>
        <ContinueWith from={from} setError={setError} />
      </Container>
    </Box>
  );
};

export default Login;
