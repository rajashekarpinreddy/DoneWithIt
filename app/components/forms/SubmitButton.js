import React from "react";
import { useFormikContext } from "formik";
import LoginButton from "../LoginButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <LoginButton title={title} onPress={handleSubmit} />;
}
export default SubmitButton;
