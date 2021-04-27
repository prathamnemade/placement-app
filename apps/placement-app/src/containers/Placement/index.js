import { Layout } from "antd";
import React from "react";
import {
  FileList,
  FileListTitleSearch,
  Filter,
  PlacementNavbar
} from "../../components/Placement";
import "./index.scss";
import { Header } from "@placement-app/shared/headers";

/**
 *
 * @param {*} props
 * @returns
 */
export const PlacementPage = (props) => {
  const [files, setFiles] = React.useState();
  const [filterHidden, setFilterHidden] = React.useState(false);

  React.useState(() => {
    setFiles(["a", "b", "c", "d", "a", "b", "c", "d"]);
  }, []);

  console.log("aa");
  if (!files) return "loading...";

  const toggleFilter = () => {
    setFilterHidden((old) => !old);
  };

  return (
    <Layout className="placement-layout">
      <Header
        type="dark"
        children={
          <PlacementNavbar
            toggleFilter={toggleFilter}
            filterHidden={filterHidden}
          />
        } 
      />
      <Layout>
        <Filter filterHidden={filterHidden} toggleFilter={toggleFilter} />
        <Layout
          className="placement-content-wrapper"
          style={{
            marginLeft: !filterHidden ? 236 : 0,
            marginTop: 70,
          }}
        >
          <Layout.Content className="placement-content">
            <FileListTitleSearch />
            <FileList files={files} />
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
