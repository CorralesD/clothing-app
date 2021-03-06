import React from "react";

import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signUp.component";

import "./signInAndSignUp.styles.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
