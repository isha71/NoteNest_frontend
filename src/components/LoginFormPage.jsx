import React, { useEffect } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import DescriptionIcon from '@mui/icons-material/Description';


function LoginFormPage() {
  const navigate = useNavigate();
  const currentUserToken = localStorage.getItem("userToken");

  // useEffect hook to check if user is logged in and redirect to Keeper page
  useEffect(() => {
    if (currentUserToken !== null) {
      navigate("/keeper");
    }
  });

  return (
    <div className="backgroundContainer columnAlignment loginFormContainer alignCenter">
      <h1 className="rowAlignment">
        <DescriptionIcon className="alignSelfCenter"/>
        NoteNest
      </h1>
      <div className="columnAlignment formContentContainer alignCenter">
        <span className="formHeading">Login</span>
        {/* Render the Form component for login */}
        <Form isRegistered={true} /> {/* Pass a prop to indicate that it's a login form */}
      </div>
      <Footer />
    </div>
  );
}

export default LoginFormPage;
