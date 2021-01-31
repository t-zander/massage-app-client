import React, { FC } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { Field, Form, Formik, FormikProps } from "formik";
import { VisitorInfo } from "./visitorInfo";

export interface AppointmentModalProps {
  open: boolean;
  onClose: (event: any) => void;
  sendVisitorInfo: (
    visitorInfo: VisitorInfo,
    formikProps: FormikProps<VisitorInfo>
  ) => void;
}

const AppointmentModal: FC<AppointmentModalProps> = ({
  open,
  onClose,
  sendVisitorInfo,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Оcтавьте свои данные и мы с вами свяжемся</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ firstName: "", lastName: "", phone: "" }}
          onSubmit={sendVisitorInfo}
        >
          {(formikProps: FormikProps<VisitorInfo>) => (
            <Form onSubmit={formikProps.handleSubmit}>
              <Field
                as={TextField}
                name="firstName"
                label="Имя"
                required
                fullWidth
              />
              <Field as={TextField} name="lastName" label="Фамилия" fullWidth />
              <Field
                as={TextField}
                name="phone"
                label="Телефон"
                type="tel"
                fullWidth
                required
              />
              <Box display="flex" justifyContent="center" marginTop={2}>
                <Button variant="outlined" type="submit">
                  Оставить заявку
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
