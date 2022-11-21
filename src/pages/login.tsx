import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// FIREBASE
import { firebaseAuth, fireStoreJob } from "../initFirebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

// INTERFACE
import { UserInputInterface } from "../interfaces/user.interface";

// CSS
import { UserForm } from "../styles/userForm.styled";
import { Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import moment from "moment";

export const Login = () => {
  const firestore_path = "users";
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<UserInputInterface>({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(`${errorCode} = ${errorMessage}`);
      });
  };

  const onClickGoogle = async (e: any) => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(firebaseAuth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        await addDoc(collection(fireStoreJob, firestore_path), {
          uid: user.uid,
          displayName:user.displayName,
          date_created: moment().utc().format(),
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(`${errorCode - errorMessage}`);
      });
  };

  return (
    <UserForm>
      <div className={"doc-title"}>
        <span>Login</span>
      </div>
      <article className={"user-form-article"}>
        <div className={"user-form-wrap"}>
          <div className={"user-form"}>
            <form onSubmit={onSubmit}>
              <TextField
                onChange={onChange}
                value={email}
                label="email"
                variant="outlined"
                name={"email"}
                type={"email"}
                required
              />
              <TextField
                onChange={onChange}
                value={password}
                label="password"
                variant="outlined"
                name={"password"}
                type={"password"}
                required
              />
              <Button
                variant={"contained"}
                type={"submit"}
                disabled={
                  email.length !== 0 && password.length !== 0 ? false : true
                }
              >
                Log In
              </Button>
            </form>
            <div className={"google-btn"}>
              <Button
                onClick={onClickGoogle}
                name={"google"}
                variant={"outlined"}
                type={"button"}
              >
                <GoogleIcon style={{ marginRight: "5px" }} />
                Login with Google account
              </Button>
            </div>
          </div>
          <div className={"cont-link"}>
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Not a member yet?
            </Link>
          </div>
        </div>
      </article>
    </UserForm>
  );
};
