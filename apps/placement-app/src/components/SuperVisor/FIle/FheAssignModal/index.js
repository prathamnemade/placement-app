import { Close } from "@placement-app/shared/assets";
import { Button } from "@placement-app/shared/buttons";
import { Text, Title } from "@placement-app/shared/typography";
import { List, Modal } from "antd";
import React from "react";
import { AssignFheCard } from "./AssignFheCard";
import "./index.scss";

const fheList = [
  {
    id: 1,
    name: "Anil Aggarwal",
    city: "New Delhi",
  },
  {
    id: 2,
    name: "Aarati Jaiswal",
    city: "Gurgaon",
  },
  {
    id: 3,
    name: "Ramesh Srinivias",
    city: "New Delhi",
  },
  {
    id: 4,
    name: "Shridhar Anand",
    city: "Gurgaon",
  },
];

/**
 * @param {*} props
 * @returns React.Node
 */
export const FheAssignModal = ({
  assignedTo,
  setAssignTo,
  showModal,
  onClose,
  setShowContactFheModal,
}) => {
  const [suggestions, setSugesstions] = React.useState(null);
  const [selectedFHE, setSelectedFHE] = React.useState(null);

  React.useEffect(() => {
    setSugesstions(fheList);
  }, []);

  if (!suggestions || suggestions === null) return null;

  const onSubmit = () => {
    onClose();
    setAssignTo(selectedFHE);
    setShowContactFheModal(true);
  };

  const selectFhe = (id) => setSelectedFHE(id);

  return (
    <Modal
      className="assign-fhe-modal"
      visible={showModal}
      closeIcon={<Close />}
      onOk={onClose}
      onCancel={onClose}
      title={<Title level={5} children={"Assign FHE"} className="title" />}
      footer={[
        <Button
          key="submit"
          className={
            "assign-btn " + (selectedFHE !== null ? " assign-btn-selected" : "")
          }
          onClick={onSubmit}
        >
          <span>Assign</span>
        </Button>,
      ]}
      centered
    >
      {assignedTo !== null && (
        <>
          <Text children={"Assinged"} className="sub-title" />
          <List
            itemLayout="horizontal"
            dataSource={[suggestions[assignedTo - 1]]}
            renderItem={(item, index) => {
              return (
                <AssignFheCard
                  onClick={selectFhe}
                  details={item}
                  key={index}
                  isSelected={selectedFHE === item.id}
                />
              );
            }}
          />
        </>
      )}
      <Text children={"Suggested"} className="sub-title" />
      <List
        itemLayout="horizontal"
        dataSource={suggestions}
        renderItem={(item, index) => {
          if (item.id === assignedTo) return null;
          return (
            <AssignFheCard
              onClick={selectFhe}
              details={item}
              key={index}
              isSelected={selectedFHE === item.id}
              assignedTo={assignedTo}
            />
          );
        }}
      />
    </Modal>
  );
};
