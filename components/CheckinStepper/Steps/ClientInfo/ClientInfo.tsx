import React, { ChangeEvent, FC } from "react";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    padding: "2rem",
    justifyContent: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    marginBottom: "18px"
  }
}));

interface ClientInfoProps {
  name: string;
  surname: string;
  phoneNumber: string;
  handleInputChange: (prop: string, value: string) => void;
}

const ClientInfo: FC<ClientInfoProps> = ({
  name,
  surname,
  phoneNumber,
  handleInputChange
}) => {
  const classes = useStyles();

  const onInputChange = (prop: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    handleInputChange(prop, e.target.value);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <FormControl>
          <InputLabel htmlFor="name">Имя</InputLabel>
          <Input id="name" value={name} onChange={onInputChange("name")} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="surname">Фамилия</InputLabel>
          <Input
            id="surname"
            value={surname}
            onChange={onInputChange("surname")}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="phoneNumber">Номер телефона</InputLabel>
          <Input
            id="phoneNumber"
            value={phoneNumber}
            onChange={onInputChange("phoneNumber")}
          />
        </FormControl>
      </form>
    </div>
  );
};

export default ClientInfo;
