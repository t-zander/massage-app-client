import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    paddding: "2rem",
    justifyContent: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    marginBottom: "18px"
  }
}));

const ClientInfo = ({ name, surname, phoneNumber, handleInputChange }) => {
  const classes = useStyles();

  const onInputChange = prop => e => {
    handleInputChange(e.target.value, prop);
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

ClientInfo.propTypes = {};

export default ClientInfo;
