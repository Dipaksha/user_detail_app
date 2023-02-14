import * as React from "react";
import { TableBody, TableRow, TableCell, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
export default function UserDetailTable(allUserInfo) {
  const rowsData = allUserInfo.info;
  rowsData.index = allUserInfo.index;
  return (
    <TableBody>
      <TableRow
        key={rowsData.index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center" component="th" scope="row">
          {rowsData.firstName}
        </TableCell>
        <TableCell align="center">{rowsData.lastName}</TableCell>
        <TableCell align="center">{rowsData.age}</TableCell>
        <TableCell align="center">{rowsData.mobile}</TableCell>
        <TableCell align="center">
          <IconButton
            onClick={() => {
              allUserInfo.setIndex(allUserInfo.index);
              allUserInfo.editInfo(rowsData);
            }}
          >
            <Edit />
          </IconButton>

          <IconButton
            disabled={allUserInfo.isEdit}
            onClick={() => allUserInfo.deleteItem(rowsData)}
          >
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
