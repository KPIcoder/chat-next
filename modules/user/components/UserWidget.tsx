import { Container, Typography } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  age: number;
  email: string;
};

export default function UserWidget({ name, age, email }: Props) {
  return (
    <Container>
      <Typography>
        {name} -- {age} -- {email}
      </Typography>
    </Container>
  );
}
