import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { createDeal } from './tikerSlice';
import { tikerSelector } from './selector';
//import { IDeal } from './types';
import { oddsForCurrencies } from './mock';

const Tiker = () => {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(tikerSelector);

  const [tradingPair, setTradingPair] = useState<string>('BYN/RUB');

  const handleChange = (event: SelectChangeEvent) => {
    setTradingPair(event.target.value as string);
  };

  const [deal, setDeal] = useState({
    status: '',
    side: '',
    price: 1,
    amount: 0,
    instrument: tradingPair,
    balance: 0,
    currentCurrency: '',
    exchangeCurrency: '',
  });

  const currentCoefficient: number =
    oddsForCurrencies[tradingPair]?.coefficient;
  const currentCurrency: string =
    oddsForCurrencies[tradingPair]?.currentCurrency;
  const exchangeCurrency: string =
    oddsForCurrencies[tradingPair]?.exchangeCurrency;

  const handleCreateDeal = useCallback(
    (side: string) => {
      setDeal((state) => {
        const stateCopy = { ...state };

        stateCopy.status = 'Active';
        stateCopy.side = side;
        stateCopy.price = currentCoefficient;
        stateCopy.amount = balance[currentCurrency];
        stateCopy.instrument = tradingPair;
        stateCopy.currentCurrency = currentCurrency;
        stateCopy.exchangeCurrency = exchangeCurrency;

        return stateCopy;
      });

      dispatch(createDeal(deal));
    },
    [
      dispatch,
      currentCoefficient,
      currentCurrency,
      exchangeCurrency,
      deal,
      balance,
      tradingPair,
    ]
  );

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
      <div>
        <div>{`BYN: ${balance.byn}`}</div>
        <div>{`RUB: ${balance.rub}`}</div>
        <div>{`USD: ${balance.usd}`}</div>
      </div>
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
              value={tradingPair}
              label="Currency pair"
              onChange={handleChange}
              size="small"
            >
              <MenuItem value={'BYN/RUB'}>BYN/RUB</MenuItem>
              <MenuItem value={'RUB/BYN'}>RUB/BYN</MenuItem>
              <MenuItem value={'RUB/USD'}>RUB/USD</MenuItem>
              <MenuItem value={'USD/RUB'}>USD/RUB</MenuItem>
              <MenuItem value={'BYN/USD'}>BYN/USD</MenuItem>
              <MenuItem value={'USD/BYN'}>USD/BYN</MenuItem>
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
            value={balance[currentCurrency]}
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
        {/* <Box
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
            defaultValue={1.2}
          />
          <Button
            color="error"
            variant="contained"
          >
            Sell
          </Button>
        </Box>
        <Box sx={{ width: '1px', bgcolor: '#000' }}></Box> */}
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
            value={currentCoefficient}
          />
          <Button
            color="success"
            variant="contained"
            disabled={!currentCoefficient}
            onClick={() => handleCreateDeal('Buy')}
          >
            Buy
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Tiker;
