import React from 'react';
import TextField from "@mui/material/TextField";
import InputMask from 'react-input-mask';

function EmailInputWithMask() {
  return (
    <InputMask mask="*!{*}@*{*}.{*}">
      {() => (
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
        />
      )}
    </InputMask>
  );
}

export default EmailInputWithMask;
