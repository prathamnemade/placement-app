import {
  BedSingle,
  FileCopy2Fill,
  Team,
  Unicycle
} from "@placement-app/shared/assets";
import { Header } from "@placement-app/shared/headers";
import { Layout } from "antd";
import React from "react";
import { RequirementCard } from "../../components/shared/cards/RequirementCard";
import { RequirementHeading } from "../../components/shared/headings/RequirementHeading";
import { TripAndBookingNavbar } from "../../components/shared/navbars/TripAndBookingNavbar";
import { Actionbar } from "../../components/SuperVisor/FIle/Actiobar";
import { FheAssignModal } from "../../components/SuperVisor/FIle/FheAssignModal";
import { ItineraryHeader } from "../../components/SuperVisor/FIle/ItineraryHeader";
import { MessageForFheModal } from "../../components/SuperVisor/FIle/MessageFheModal";
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
  const [isAccepted, setIsAccepted] = React.useState(false);
  const [assignedTo, setAssignTo] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [showContactFheModal, setShowContactFheModal] = React.useState(false);
  const onCloseModal = () => setShowModal(false);

  React.useState(() => {
    setFile({ name: "file" });
  }, []);

  if (!file) return "Loading...";

  const toggleDayItineraryModal = () => setDaysItineraryHidden((old) => !old);

  return (
    <Layout className="supervisor-layout">
      <FheAssignModal
        assignedTo={assignedTo}
        setAssignTo={setAssignTo}
        showModal={showModal}
        onClose={onCloseModal}
        setShowContactFheModal={setShowContactFheModal}
      />
      {showContactFheModal && (
        <MessageForFheModal
          assignedFhe={assignedTo}
          setShowContactFheModal={setShowContactFheModal}
        />
      )}
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
            <Actionbar
              assignedTo={assignedTo}
              isAccepted={isAccepted}
              setIsAccepted={setIsAccepted}
              setShowModal={setShowModal}
              setShowContactFheModal={setShowContactFheModal}
            />
            <div className="supervisor-list-container">
              <ItineraryHeader
                headerList={headerList}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
              <RequirementHeading icon={<BedSingle />} text={"Hotels"} />
              <RequirementCard
                title={"The Oberoi Hotel, New Delhi"}
                image={"/assets/images/empanelmentBG.png"}
                tags={["30/10/20", "31/10/20", "1/11/20"]}
                extra={[
                  {
                    icon: <Team />,
                    text: "3 Adults, 2 Child",
                  },
                  {
                    icon: <FileCopy2Fill />,
                    text: "Customer Specific",
                  },
                ]}
              />
              <RequirementHeading icon={<Unicycle />} text={"Activities"} />
              <RequirementCard
                title={"Walking Tour of New Delhi"}
                image={"/assets/images/empanelmentBG.png"}
                tags={["30/10/20", "Starts from Barakhamba Road  |  8 AM"]}
                extra={[
                  {
                    icon: <Team />,
                    text: "3 Adults, 2 Child",
                  },
                  {
                    icon: <FileCopy2Fill />,
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
                    icon: <Team />,
                    text: "3 Adults, 2 Child",
                  },
                ]}
              />
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
