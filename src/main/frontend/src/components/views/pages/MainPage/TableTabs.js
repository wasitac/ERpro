/**
 * 이지홍
 */
import React, { useState, useEffect } from "react";
import { Tabs, Calendar } from "antd";
import DataTable from "./DataTable";
import menus from "../../commons/menus";

// 저장한 탭 기록 출력
const TableTabs = (props) => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const [activeKey, setActiveKey] = useState([]);
  const [items, setItems] = useState([]);

  const onChange = (key) => {
    setActiveKey(key);
  };

  useEffect(() => {
    add(props.keyOfmenu[0]);
  }, [props.keyOfmenu]);

  const add = (key) => {
    const isValueExist = items.some((value) => value.key === key);

    if (!isValueExist) {
      setItems([
        ...items,
        {
          label: menus[key].label,
          children:
            key === "main" ? (
              <Calendar onPanelChange={onPanelChange} />
            ) : (
              <DataTable keyOfmenu={key} />
            ),
          key: key,
        },
      ]);
    }

    setActiveKey(key);
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
