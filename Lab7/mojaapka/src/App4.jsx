import React from 'react';
import { 
    Paper, makeStyles, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Quiz() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'good') {
      setHelperText('You got it! Good answer');
      setError(false);
    } else if (value === 'wrong') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} align='center'>
      <Paper>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">quiz: answer is</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="good" control={<Radio />} label="good" />
          <FormControlLabel value="wrong" control={<Radio />} label="wrong" />
        </RadioGroup>
        <p>{helperText}</p>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Check Your Answer
        </Button>
      </FormControl>
      </Paper>
    </form>
  );
}

export default Quiz;