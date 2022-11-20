import React from "react";

import {UserForm} from "../styles/userForm.styled";
import {Button, TextField} from "@mui/material";

export const Login = () => {
    return (
        <UserForm>
        <div className={'doc-title'}>
            <span>Login</span>
        </div>
        <article className={'user-form-article'}>
            <div className={'user-form-wrap'}>
                <div className={'user-form'}>
                    <form>
                        <TextField label="email" variant="outlined"
                                    name={'email'} type={'email'}
                                   required/>
                        <TextField label="password" variant="outlined"
                                   name={'password'} type={'password'}
                                   required/>
                        <Button variant={'contained'} type={"submit"}
                                disabled={true}>
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </article>
        </UserForm>
    )
}