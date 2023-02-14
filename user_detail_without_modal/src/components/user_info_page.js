import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserDetailTable from "./user_table_detail";
import {
  Container,
  Box,
  Grid,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import Paper from "@mui/material/Paper";
const theme = createTheme();

function UserInfo() {
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    age: "",
  });
  const [showTable, setShowTable] = useState(false);
  const [listUserDetail, setListUserDetail] = useState([]);
  const [index, setIndex] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetail({
      ...userDetail,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      userDetail.firstName &&
      userDetail.lastName &&
      userDetail.age &&
      userDetail.mobile
    ) {
      setShowTable(true);
      const user = {
        firstName: userDetail.firstName,
        lastName: userDetail.lastName,
        age: userDetail.age,
        mobile: userDetail.mobile,
        index: index,
      };
      let arr = [...listUserDetail];

      if (isEdit) {
        arr[index] = user;
      } else {
        arr.push(user);
      }
      setIsEdit(false);
      setListUserDetail(arr);
    }
    setUserDetail({
      firstName: "",
      lastName: "",
      mobile: "",
      age: "",
    });
  };

  const handleReset = () => {
    setUserDetail({
      firstName: "",
      lastName: "",
      mobile: "",
      age: "",
    });
  };
  const editInfo = (rowsData) => {
    setIsEdit(true);
    listUserDetail.map((info) => {
      const itemIndex = listUserDetail.indexOf(info);
      if (itemIndex === rowsData.index) {
        setUserDetail({
          firstName: rowsData.firstName,
          lastName: rowsData.lastName,
          mobile: rowsData.age,
          age: rowsData.mobile,
        });
      }
    });
  };

  const deleteItem = (rowsData) => {
    const newList = [...listUserDetail];
    newList.map((info) => {
      const itemIndex = newList.indexOf(info);
      if (itemIndex === rowsData.index) {
        newList.splice(itemIndex, 1);
      }
    });
    if (newList.length <= 0) {
      setShowTable(false);
    }
    setListUserDetail(newList);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box component="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="firstName"
                required
                fullWidth
                value={userDetail.firstName}
                onChange={handleInputChange}
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                value={userDetail.lastName}
                onChange={handleInputChange}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="off"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="age"
                required
                value={userDetail.age}
                fullWidth
                onChange={handleInputChange}
                id="age"
                autoComplete="off"
                label="age"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                onChange={handleInputChange}
                id="mobileNumber"
                value={userDetail.mobile}
                autoComplete="off"
                label="Mobile Number"
                name="mobile"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleReset}
              >
                Reset
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                {isEdit ? "Edit" : "Save"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Grid>
        {showTable && (
          <TableContainer sx={{ marginTop: 2 }} component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Age</TableCell>
                  <TableCell align="center">Mobile Number</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              {listUserDetail.map((info, index) => (
                <UserDetailTable
                  key={index}
                  info={info}
                  index={index}
                  setIndex={setIndex}
                  isEdit={isEdit}
                  deleteItem={deleteItem}
                  editInfo={editInfo}
                />
              ))}
            </Table>
          </TableContainer>
        )}
      </Grid>
    </ThemeProvider>
  );
}
export default UserInfo;
