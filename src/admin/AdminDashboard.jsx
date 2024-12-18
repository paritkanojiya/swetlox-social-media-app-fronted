import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TablePagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const AdminDashboard = () => {
  // State to manage users and pagination
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalUsers, setTotalUsers] = useState(0); // Total users in the database

  // Fetch paginated users from the API
  const fetchUsers = async (pageNum, pageSize) => {
    try {
      const { data } = await axios.get(
        `http://localhost:9000/swetlox/admin/v1/api/get-all-user/${pageNum}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("auth"),
          },
        }
      );
      const filterData = data.content.filter(
        (user) => user.userName != "admin"
      );
      setUsers(filterData); // Assuming data.content contains the list of users
      setTotalUsers(data.totalElements); // Set the total number of users from API response
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  // Fetch active user count (if needed)
  const fetchActiveUserNum = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:9000/swetlox/admin/v1/api/get-num-of-user",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("auth"),
          },
        }
      );
      console.log(data);
      setTotalUsers(data - 1); // Assuming total users count is returned here
    } catch (error) {
      console.error("Error fetching user count", error);
    }
  };

  const deletUserById = (id) => {
    // Delete user by ID logic here
    axios.get(`http://localhost:9000/swetlox/admin/v1/api/delete-user/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth"),
      },
    });
  };

  useEffect(() => {
    // Fetch users whenever the page or rowsPerPage changes
    fetchUsers(page, rowsPerPage);
    fetchActiveUserNum();
  }, [page, rowsPerPage]);

  // Delete a user by filtering them out of the users array
  const deleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof!  user has been deleted!", {
          icon: "success",
        });
        deletUserById(id);
        setUsers(users.filter((user) => user.id !== id));
      } else {
        swal("Cancel operation !");
      }
    });
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page on rowsPerPage change
  };

  return (
    <div className="p-6 bg-[#141414] min-h-screen">
      <div className="pt-20 pb-10 flex relative">
        <h1 className="text-3xl absolute left-[40%] text-white font-semibold text-center mb-8">
          Admin Dashboard
        </h1>
        <h1 className="text-white flex justify-end items-center text-end w-[100%]">
          <b>Number of Active Users:</b> {totalUsers}
        </h1>
      </div>
      <TableContainer component={Paper} className="shadow-lg">
        <Table>
          <TableHead className="bg-[#122331] text-white">
            <TableRow>
              <TableCell
                sx={{ color: "white" }}
                className="text-white font-bold"
              >
                ID
              </TableCell>
              <TableCell
                sx={{ color: "white" }}
                className="text-white font-bold"
              >
                Avatar
              </TableCell>
              <TableCell
                sx={{ color: "white" }}
                className="text-white font-bold"
              >
                Username
              </TableCell>
              <TableCell
                sx={{ color: "white" }}
                className="text-white font-bold"
              >
                Email
              </TableCell>
              <TableCell
                sx={{ color: "white" }}
                className="text-white font-bold"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <Avatar src={user.profileURL} alt={user.userName} />
                </TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteUser(user.id)}
                    className="mr-2"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={totalUsers}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>
    </div>
  );
};

export default AdminDashboard;
