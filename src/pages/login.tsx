import React, { ChangeEvent, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

// FIREBASE
import { firebaseAuth } from "../initFirebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// INTERFACE
import { UserInputInterface } from "../interfaces/user.interface";

// CSS
import { UserForm } from "../styles/userForm.styled";
import { Button, TextField } from "@mui/material";


export const Login = () => {
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
