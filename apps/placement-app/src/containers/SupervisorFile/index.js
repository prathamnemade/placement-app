import { Layout } from "antd";
import React from "react";
import "./index.scss";
import { Header } from "@placement-app/shared/headers";
import { TripAndBookingNavbar } from "../../components/shared/navbars/TripAndBookingNavbar";
import { Actionbar } from "../../components/SuperVisor/FIle/Actiobar";
import { ItineraryHeader } from "../../components/SuperVisor/FIle/ItineraryHeader";

const headerList = [
  {
    id: 1,
    fromDate: "12/10/21",
    toDate: "12/14/21",
    city: "New Delhi",
  },
  {
    id: 2,
    fromDate: "12/10/21",
    toDate: "12/14/21",
    city: "Agra",
  },
  {
    id: 3,
    fromDate: "12/10/21",
    toDate: "12/14/21",
    city: "Gurgaon",
  },
  {
    id: 4,
    fromDate: "12/10/21",
    toDate: "12/14/21",
    city: "Jaipur",
  },
];

/**
 *
 * @param {*} props
 * @returns
 */
export const SuperVisorFilePage = (props) => {
  const [file, setFile] = React.useState();
  const [daysItineraryHidden, setDaysItineraryHidden] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useState(() => {
    setFile({ name: "file" });
  }, []);

  if (!file) return "Loading...";

  const toggleDayItineraryModal = () => {
    setDaysItineraryHidden((old) => !old);
  };

  return (
    <Layout className="supervisor-layout">
      <Header
        type="dark"
        children={
          <TripAndBookingNavbar
            toggleDayItineraryModal={toggleDayItineraryModal}
            daysItineraryHidden={daysItineraryHidden}
          />
        }
      />
      <Layout>
        <Layout className="supervisor-content-wrapper">
          <Layout.Content className="supervisor-content">
            <Actionbar />
            <div className="supervisor-list-container">
              <ItineraryHeader
                headerList={headerList}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
