import React from "react";
import {Button, Input} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {TodoFormWrap} from "../styles/todoForm.styled";

export const TodoForm = () => {

    return (
        <TodoFormWrap>
            <div className={'todo-list-container'}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Task</TableCell>
                                <TableCell>DONE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody></TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={'todo-form-container'}>
                <form>
                    <Input/>
                    <Button>Enter</Button>
                </form>
            </div>
        </TodoFormWrap>
    )
}