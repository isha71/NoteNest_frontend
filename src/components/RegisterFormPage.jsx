import React, { useEffect } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import DescriptionIcon from '@mui/icons-material/Description';

function RegisterFormPage() {
  const navigate = useNavigate();
  const currentUserToken = localStorage.getItem("userToken");

  // useEffect hook to check if the user is logged in and redirect to the home page
  useEffect(() => {
    if (currentUserToken !== null) {
      navigate("/");
    }
  });

  return (
    <div className="backgroundContainer columnAlignment registerFormContainer alignCenter">
      <h1 className="rowAlignment">
        <DescriptionIcon className="alignSelfCenter"/>
        NoteNest
      </h1>
      <div className="columnAlignment formContentContainer alignCenter">
        <span className="formHeading">Register</span>
         {/* Render the Form component for registration */}
        <Form isRegistered={false} />  {/* Pass a prop to indicate that it's a registration form */}
      </div>
      <Footer />
    </div>
  );
}

export default RegisterFormPage;
