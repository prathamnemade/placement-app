import React from "react";
import "./index.scss";
import { Modal, Button } from "antd";
import { CkEditor } from "@placement-app/shared/ck-editor";
import { Title, Text } from "@placement-app/shared/typography";
import { Close } from "@placement-app/shared/assets";

const dValue = `<div>
  • Hotel Check-In 1400, Check-out time 1200 NOON.
  • Supplement will be applicable from 20th December’2020 – 10th January’ 2021.
  • Rates are net, non-commissionable and include all taxes applicable at the time of quotation.  Extreme currencies fluctuations may cause the total tour price to increase at any time prior to final prices are subject to change with any increase in the cost. 
  • SITA reserves the right to modify itineraries and/or substitute hotels of a reasonably similar quality, when available, should circumstances beyond our control deem it necessary.
  • The transportation arrangements includes visitation within city limits only. 
  • Deposits imposed by SITA’s suppliers (e.g. hotels, motor coach companies etc.) will be charged when they occur. Full payment of deposits is due as per deposit invoice. Non-compliance with the deposit requirements can result in change or loss of services. All deposits are non-transferable. 
  • In no event shall the liability of SITA or any of their respective subsidiaries or affiliates exceed the amount actually paid to such parties by the claimant and in no event shall any of such parties have liability to any claimant for special or consequential damages.  Services and conditions will be subject to the law regulating the activities of travel agents in the country where the services are rendered.
  • Guests travelling from the continent of North America to India can avail the E-tourist visa facility. For the complete details, please visit https://indianvisaonline.gov.in/visa/tvoa.html
  </div>`;

export function MessageForFheModal({
  assignedFhe,
  setShowContactFheModal,
  ...props
}) {
  if (!assignedFhe) return null;

  const onClose = () => {
    setShowContactFheModal(false);
  };

  const onSubmit = () => {
    onClose();
  };

  return (
    <Modal
      width="810px"
      className="message-for-fhe-modal"
      visible={true}
      onOk={onClose}
      onCancel={onClose}
      footer={
        <Button
          key="submit"
          className="btn"
          onClick={onSubmit}
          children={"Send"}
        />
      }
      title={
        <>
          <Title level={5} children="Message for new FHE" className="title" />
          <Text
            children="Let the FHE know what he/she needs to do"
            className="sub-title"
          />
        </>
      }
      closeIcon={<Close />}
      centered
    >
      <div className="content-labels">Description</div>
      <div className="desc-area">
        <CkEditor
          data={dValue}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
            ],
            heading: {
              options: [
                {
                  model: "paragraph",
                  title: "Paragraph",
                  class: "ck-heading_paragraph",
                },
                {
                  model: "heading1",
                  view: "h1",
                  title: "Heading 1",
                  class: "ck-heading_heading1",
                },
                {
                  model: "heading2",
                  view: "h2",
                  title: "Heading 2",
                  class: "ck-heading_heading2",
                },
              ],
            },
            fullPage: false,
            resize_enabled: false,
          }}
        />
      </div>
    </Modal>
  );
}
