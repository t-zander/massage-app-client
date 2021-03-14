import React from 'react';
import { Box, FormHelperText, TextField } from '@material-ui/core';

interface Props {}

const AttendeeMainInfoForm = (props: Props) => {
  return (
    <Box maxWidth={400}>
      <FormHelperText>
        * мы не передаем ваши данные третьим лицам и используем их исключительно
        для связи с вами для уточнения возможных вопросов касательно записи
      </FormHelperText>
      <TextField name="name" label="Имя" fullWidth required />
      <TextField name="email" label="Email" fullWidth />
      <FormHelperText>не обязательно</FormHelperText>
      <TextField name="phone" type="tel" label="Телефон" fullWidth required />
    </Box>
  );
};

export default AttendeeMainInfoForm;
