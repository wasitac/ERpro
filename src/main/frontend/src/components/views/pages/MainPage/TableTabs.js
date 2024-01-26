/**
 * 이지홍
 */
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Tabs } from "antd";
import DataTable from "./DataTable";

// 이거대신 탭 기록 넣으면 됨
// const defaultPanes = new Array(2).fill(null).map((_, index) => {
//   const id = String(index + 1);
//   return {
//     label: `Tab ${id}`,
//     children: `Content of Tab Pane ${index + 1}`,
//     key: id,
//   };
// });

// 저장한 탭 기록 출력
const TableTabs = (props) => {
  const [activeKey, setActiveKey] = useState([]);
  const [items, setItems] = useState([]);
  const onChange = (key) => {
    setActiveKey(key);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/home/${props.menu}`);
        setData(response.data);
        console.log(response.data);
        add();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [props.menu]);

  const add = () => {
    const isValueExist = items.some((value) => value.label === props.menu);
    if (!isValueExist) {
      setItems([
        ...items,
        {
          label: props.menu,
          children: <DataTable></DataTable>,
          key: props.menu,
        },
      ]);
    }
    setActiveKey(props.menu);
  };

  const remove = (targetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      setActiveKey(key);
    }
    setItems(newPanes);
  };

  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      ></div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={items}
      />
    </div>
  );
};
export default TableTabs;
