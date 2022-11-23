import React, { useEffect, useState } from "react";

// FIREBASE
import { firebaseAuth, fireStoreJob } from "../initFirebase";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";

// INTERFACE
import { UserInterface } from "../interfaces/user.interface";
import { TodoInterface } from "../interfaces/todo.interface";

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
import Checkbox from "@mui/material/Checkbox";

type TodoListType = {
  userInfo: UserInterface;
};

export const TodoList = ({ userInfo }: TodoListType) => {
  const firestore_path = "tasks";
  const [list, setList] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const q = query(
      collection(fireStoreJob, firestore_path),
      where("uid", "==", userInfo.uid),
      where("status", "==", "READY"),
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
      setList(arr);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const onClick = async (e: any) => {
    const doc_id = e.target.id;
    const ref = doc(fireStoreJob, firestore_path, doc_id);
    await updateDoc(ref, {
      status: "DONE",
    });
  };

  return (
    <TodoListWrap>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>TODO</TableCell>
                <TableCell>Dead Line</TableCell>
                <TableCell>Done</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((data) => {
                return (
                  <TableRow key={data.id} id={data.id}>
                    <TableCell>{data.task}</TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>
                      <Checkbox onClick={onClick} id={data.id} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </TodoListWrap>
  );
};
