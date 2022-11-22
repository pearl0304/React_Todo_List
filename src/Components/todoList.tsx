import React, { useEffect, useState } from "react";

// FIREBASE
import { firebaseAuth, fireStoreJob } from "../initFirebase";
import {
  collection,
  query,
  where,
  orderBy,
  doc,
  onSnapshot,
} from "firebase/firestore";

// CSS
import { TodoListWrap } from "../styles/todoList.styled";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { UserInterface } from "../interfaces/user.interface";

type TodoListType = {
  userInfo: UserInterface;
};

export const TodoList = ({ userInfo }: TodoListType) => {
  const firestore_path = "tasks";
  const [list, setList] = useState<TodoListType[]>([]);

  useEffect(() => {
    const q = query(
      collection(fireStoreJob, firestore_path),
      where("uid", "==", userInfo.uid),
      orderBy("date_created", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // @ts-ignore
        setList(arr)
    });

    return () => {
        unsubscribe()
    }
  }, []);

  console.log(list)

  return (
    <TodoListWrap>
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
    </TodoListWrap>
  );
};
