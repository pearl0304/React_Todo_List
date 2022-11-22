import React from "react";

// CSS
import { TodoListWrap } from "../styles/todoList.styled";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export const TodoList = () => {
  return <TodoListWrap>
      <TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>TODO</TableCell>
                      <TableCell>Dead Line</TableCell>
                      <TableCell>Done</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody></TableBody>
          </Table>
      </TableContainer>
  </TodoListWrap>;
};
