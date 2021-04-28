import { EnvironmentFilled } from "@ant-design/icons";
import { Header } from "@placement-app/shared/headers";
import { Tag } from "@placement-app/shared/tags";
import { Layout, Avatar } from "antd";
import Title from "antd/lib/skeleton/Title";
import React from "react";
import { RequirementCard } from "../../components/shared/cards/RequirementCard";
import { RequirementHeading } from "../../components/shared/headings/RequirementHeading";
import { TripAndBookingNavbar } from "../../components/shared/navbars/TripAndBookingNavbar";
import { Actionbar } from "../../components/SuperVisor/FIle/Actiobar";
import { ItineraryHeader } from "../../components/SuperVisor/FIle/ItineraryHeader";
import "./index.scss";

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
              <RequirementHeading
                icon={<EnvironmentFilled />}
                text={"Hotels"}
              />
              <RequirementCard
                title={"The Oberoi Hotel, New Delhi"}
                image={"/assets/images/empanelmentBG.png"}
                tags={["30/10/20", "31/10/20", "1/11/20"]}
                extra={[
                  {
                    icon: <EnvironmentFilled />,
                    text: "3 Adults, 2 Child",
                  },
                  {
                    icon: <EnvironmentFilled />,
                    text: "Customer Specific",
                  },
                ]}
              />
              <RequirementHeading
                icon={<EnvironmentFilled />}
                text={"Activities"}
              />
              <RequirementCard
                title={"Walking Tour of New Delhi"}
                image={"/assets/images/empanelmentBG.png"}
                tags={["30/10/20", "Starts from Barakhamba Road  |  8 AM"]}
                extra={[
                  {
                    icon: <EnvironmentFilled />,
                    text: "3 Adults, 2 Child",
                  },
                  {
                    icon: <EnvironmentFilled />,
                    text: "Walking Assistance",
                  },
                ]}
              />
              <RequirementCard
                title={"Indian Baking Session"}
                image={"/assets/images/empanelmentBG.png"}
                tags={["30/10/20", "Defence Colony   |  7:30 AM"]}
                extra={[
                  {
                    icon: <EnvironmentFilled />,
                    text: "3 Adults, 2 Child",
                  }
                ]}
              />
              
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
