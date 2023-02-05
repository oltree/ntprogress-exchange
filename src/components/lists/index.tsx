import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1,
      creationTime: '2023.01.12',
      changeTime: '2023.01.12',
      status: 'Active',
      side: 'Buy',
      price: 100,
      amount: 1000000,
      instrument: 'BYN/RUB',
    },
  ];

  return (
    <TableContainer
      sx={{ userSelect: 'none' }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Creation time</TableCell>
            <TableCell align="center">Change time</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Side</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Instrument</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.creationTime}</TableCell>
              <TableCell align="center">{row.changeTime}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.side}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.instrument}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
