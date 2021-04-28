import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Tag } from "./index";
import "../index.scss";

export default {
  title: "Tags/Default",
  decorators: [withKnobs],
};

export const Options = () => (
  <Tag
    children={text("children", "Tag")}
    closable={boolean("closable", false)}
    visible={boolean("visible", true)}
    className={text("className", "")}
    color={select(
      "color",
      ["danger", "purple", "success", "warning", "default"],
      "default"
    )}
  />
);

export const IconTag = () => (
  <Tag
    children={text("children", "Tag")}
    closable={boolean("closable", false)}
    visible={boolean("visible", true)}
    className={text("className", "")}
    icon={<>&gt;</>}
    closeIcon={<>X</>}
    color={select(
      "color",
      ["danger", "purple", "success", "warning", "default"],
      "default"
    )}
  />
);
