import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 10
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

 

function App() {
  const [name, setName] = React.useState('Composed TextField');
  const classes = useStyles();

  const handleChange = event => {
    setName(event.target.value);
  };

  const inputProps = {
    step: 300,
  };

  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" className={classes.title}>
            Send a Message!
          </Typography>
      
        </Toolbar>
      </AppBar>
    </div>
    <div class="container">
     
      <form >
          <FormControl display="block">
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input id="component-simple"  width={1}/>
          </FormControl>
     
          <FormControl display="block">
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl display="block">
            <InputLabel htmlFor="subject">Subject</InputLabel>
            <Input id="subject"  width={1}/>
          </FormControl>
          <FormControl display="block">
            <FormHelperText id="my-helper-text2">Message</FormHelperText>
            
            <TextField id="time" multiline={true} rows={3} width={1} p={1} my={0.5} />
          </FormControl>

          <FormControl>
          <Button variant="contained" color="primary">
            Send
          </Button>
          </FormControl>
    </form>

    </div>
   

    </div>

  );
}

export default App;
