import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Tiker = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box
      sx={{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
      component={Paper}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <Box sx={{ width: 150 }}>
          <FormControl fullWidth>
            <InputLabel
              size="small"
              id="demo-simple-select-label"
            >
              Currency pair
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Currency pair"
              onChange={handleChange}
              size="small"
            >
              <MenuItem value={10}>BYN/RUB</MenuItem>
              <MenuItem value={20}>RUB/BYN</MenuItem>
              <MenuItem value={30}>BYN/USD</MenuItem>
              <MenuItem value={30}>USD/BYN</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          component="form"
          sx={{ width: 150 }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-number"
            label="Amount"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={100000}
            size="small"
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: '80%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '100px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <TextField
            id="outlined-number"
            label="Sell"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            defaultValue={100000}
          />
          <Button
            color="error"
            variant="contained"
          >
            Sell
          </Button>
        </Box>
        <Box sx={{ width: '1px', bgcolor: '#000' }}></Box>
        <Box
          sx={{
            width: '100px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <TextField
            id="outlined-number"
            label="Buy"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            defaultValue={100000}
          />
          <Button
            color="success"
            variant="contained"
          >
            Buy
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Tiker;
