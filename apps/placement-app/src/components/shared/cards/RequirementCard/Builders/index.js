import { Tag } from "@placement-app/shared/tags";
import { Title } from "@placement-app/shared/typography";
import { Avatar } from "antd";
import React from "react";
import "./index.scss";

/**
 * Render title for Requirementcard
 * @param {*} props
 * @returns
 */
export const TitleBuilder = ({ title }) => {
  return <Title level={5}>{title}</Title>;
};

/**
 * Render image for Requirementcard
 * @param {*} props
 * @returns
 */
export const ImageBuilder = ({ src }) => {
  return <Avatar shape="square" size={90} src={src} />;
};

/**
 * Render tags for Requirementcard
 * @param {*} props
 * @returns
 */
export const TagsBuilder = ({ tags }) => {
  return (
    <>
      {tags.map((e, index) => (
        <Tag key={index} type="unbordered" shape="rounded" color="requirement">
          {e}
        </Tag>
      ))}
    </>
  );
};

/**
 * Render tags for Requirementcard
 * @param {*} props
 * @returns
 */
export const ExtraBuilder = ({ extra }) => {
  return (
    <>
      {extra.map((e, index) => (
        <Tag icon={e.icon} children={e.text} color="ghost" key={index} />
      ))}
    </>
  );
};
