import React from "react";
import CheckinStepper from "../components/CheckinStepper/CheckinStepper";
import Layout from "../components/Layout/Layout";

function CheckIn() {
  return (
    <Layout backgroundUrl="/img/background-checkin.png">
      <CheckinStepper />
    </Layout>
  );
}

export default CheckIn;
