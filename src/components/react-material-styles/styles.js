import { makeStyles } from "@material-ui/core";

export const navBarStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button: {
      marginRight: theme.spacing(3),
    },
    title: {
      flexGrow: 1,
    },
}));

export const marginPaddingZero = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  }
}));

export const standarForm = makeStyles((theme) => ({
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const cardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    margin: '10%',
    paddingTop: '120%', // 16:9
    borderRadius: '5px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));