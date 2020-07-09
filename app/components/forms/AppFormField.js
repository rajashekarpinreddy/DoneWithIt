import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, touched, errors, handleChange } = useFormikContext();
  return (
    <>
      <AppTextInput
        //autoCapitalize="none"
        //autoCorrect={false}
        //keyboardType="email-address"
        //icon="email"
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        //placeholder="Email"
        //textContentType="emailAddress"
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
export default AppFormField;
