import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import AppointmentModal from "../components/AppointmentModal/AppointmentModal";
import Banner from "../components/Banner/Banner";
import WhatWeOffer from "../components/WhatWeOffer/WhatWeOffer";
import { AppointmentModalProps } from "../components/AppointmentModal/AppointmentModal";
import MassageTypes from "../components/MassageTypes/MassageTypes";

const Home = () => {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  const onShowAppointmentModal = () => {
    setAppointmentModalOpen(true);
  };

  const onHideAppointmentModal = () => {
    setAppointmentModalOpen(false);
  };

  const sendVisitorInfo: AppointmentModalProps["sendVisitorInfo"] = (
    visitorInfo,
    formikProps
  ) => {
    console.log("C", visitorInfo);
  };

  return (
    <Layout>
      <Banner />
      <WhatWeOffer />
      <MassageTypes />
      <AppointmentModal
        open={appointmentModalOpen}
        onClose={onHideAppointmentModal}
        sendVisitorInfo={sendVisitorInfo}
      />
    </Layout>
  );
};

export default Home;
