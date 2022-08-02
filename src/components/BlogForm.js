import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const BlogForm = () => {

  return (
    <Grid
      textAlign="center"
      style={{ width: '300px' }}
    >

      <h2 className="contact-header">Add Contact</h2>

      <Box style={{ backgroundColor: 'white', padding: '20px' }}>
        <form >
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              name="phoneNumber"
              placeholder="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: '20px' }}>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                variant="outlined"
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" type="submit" value="Submit">
             Add
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default BlogForm;
