"use client";

import { Button, TextField, TextFieldProps } from "@mui/material";
import React, { useState } from "react";

type Props = {
  handleSend: (message: string) => void;
} & TextFieldProps;

export default function СhatInput({ handleSend, ...props }: Props) {
  // add support for files
  const [message, setMessage] = useState<string>("");

  const onChange = (text: string) => setMessage(text.trimStart());
  const handleClearInputAfterSend = () => setMessage("");
  const handleClick = (message: string) => {
    handleSend(message);
    handleClearInputAfterSend();
  };

  return (
    <>
      <TextField
        {...props}
        value={message}
        onChange={(e) => onChange(e.target.value)}
        multiline
        maxRows={4}
      />
      <Button
        disabled={message.length === 0}
        variant="text"
        onClick={() => handleClick(message)}
      >
        Send
      </Button>
    </>
  );
}
