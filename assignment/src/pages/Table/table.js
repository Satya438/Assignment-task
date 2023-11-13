import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Hidden from "@mui/material/Hidden";

// Generate Order Data
function createData(id, date, name, shipTo) {
  return { id, date, name, shipTo };
}

const rows = [
  createData(0, "16 Mar, 2019", "VISA ⠀•••• 3719", 312.44),
  createData(1, "16 Mar, 2019", "VISA ⠀•••• 2574", 866.99),
  createData(2, "16 Mar, 2019", "MC ⠀•••• 1253", 100.81),
  createData(3, "16 Mar, 2019", "AMEX ⠀•••• 2000", 654.39),
  createData(4, "15 Mar, 2019", "VISA ⠀•••• 5919", 212.79),
];

export default function Orders() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <Hidden xsDown>
              <TableCell>Name</TableCell>
            </Hidden>
            <Hidden xsDown>
              <TableCell>Ship To</TableCell>
            </Hidden>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <Hidden xsDown>
                <TableCell>{row.name}</TableCell>
              </Hidden>
              <Hidden xsDown>
                <TableCell>{row.shipTo}</TableCell>
              </Hidden>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Add more content or links as needed */}
    </React.Fragment>
  );
}
