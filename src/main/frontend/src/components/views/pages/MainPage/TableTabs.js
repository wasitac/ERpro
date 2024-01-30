/**
 * 이지홍
 */
import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import DataTable from "./DataTable";
import menus from "../../commons/menus";

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

  useEffect(() => {
    add();
  }, [props.keyOfmenu]);

  const add = () => {
    const isValueExist = items.some((value) => value.key === props.keyOfmenu);
    if (!isValueExist) {
      setItems([
        ...items,
        {
          label: menus[props.keyOfmenu].label,
          children: <DataTable keyOfmenu={props.keyOfmenu} />,
          key: props.keyOfmenu,
        },
      ]);
    }
    setActiveKey(props.keyOfmenu);
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
        onEdit={remove}
        items={items}
      />
    </div>
  );
};
export default TableTabs;
