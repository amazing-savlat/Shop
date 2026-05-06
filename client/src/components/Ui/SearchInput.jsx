import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import useGadgetsStore from "../../store/useGadgetsStore";

const { Search } = Input;

const SearchInput = () => {
  const filterData = useGadgetsStore((state) => state.filterData);

  return (
    <Space vertical>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={(value) => {
          filterData(value);
        }}
        onChange={(event) => {
          filterData(event.target.value);
        }}
      />
    </Space>
  );
};

export default SearchInput;
