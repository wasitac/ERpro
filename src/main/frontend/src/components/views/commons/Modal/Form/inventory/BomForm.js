import { useState, useEffect } from "react";
import fetchApi from "../../../../../../img/modules/api";
import { Button, Form, Input, Select, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const BomForm = ({ form, mode }) => {
  // 물품 목록
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    // 물품 목록조회
    fetchItemList();
  }, []);

  // 수정 모드일때 수동으로 매입단가 및 금액 계산
  useEffect(() => {
    if (mode === "edit") {
      const bomList = form.getFieldValue("bomList");
      const updatedBomList = [...bomList];

      for (let index = 0; index < updatedBomList.length; index++) {
        const bom = updatedBomList[index];
        const materialId = bom.materialId;
        const selectedMaterialItem = itemList.find(
          (item) => item.id === materialId
        );
        const buyPrice = selectedMaterialItem
          ? selectedMaterialItem.buyPrice
          : null;

        updatedBomList[index] = {
          ...bom,
          buyPrice: buyPrice,
          price: !isNaN(buyPrice * bom.requiredAmount)
            ? buyPrice * bom.requiredAmount
            : "",
        };
      }

      form.setFieldsValue({
        bomList: updatedBomList,
      });
    }
  }, [form.getFieldValue("bomList")]);

  // 물품 목록 조회
  const fetchItemList = async () => {
    try {
      const response = await fetchApi.get("/item");
      setItemList(response.data.data);
    } catch (error) {
      console.error("물품 목록 조회 에러:", error);
    }
  };

  // 자재 선택 시 매입단가 설정
  const onMaterialSelect = (value, formInstance, name) => {
    const selectedMaterial = itemList.find((item) => item.id === value);
    if (selectedMaterial) {
      const bomList = formInstance.getFieldValue("bomList");
      const updatedBomList = [...bomList];
      updatedBomList[name].buyPrice = selectedMaterial.buyPrice;

      // 금액 변경
      if (
        !isNaN(
          updatedBomList[name].buyPrice * updatedBomList[name].requiredAmount
        )
      ) {
        updatedBomList[name].price =
          updatedBomList[name].buyPrice * updatedBomList[name].requiredAmount;
      }

      formInstance.setFieldsValue({
        bomList: updatedBomList,
      });
    }
  };

  // 소요량 입력에 따른 금액 계산
  const onPriceChange = (value, formInstance, name) => {
    const bomList = formInstance.getFieldValue("bomList");
    const updatedBomList = [...bomList];

    if (
      !isNaN(
        updatedBomList[name].buyPrice * updatedBomList[name].requiredAmount
      )
    ) {
      updatedBomList[name].price =
        updatedBomList[name].buyPrice * updatedBomList[name].requiredAmount;
    }

    formInstance.setFieldsValue({
      bomList: updatedBomList,
    });
  };

  return (
    <>
      <Form.Item name="id" noStyle>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item
        label="제품"
        name="itemId"
        rules={[{ required: true, message: "제품을 선택해주세요." }]}
      >
        <Select disabled={mode === "add" ? false : true}>
          {itemList.map(
            (item) =>
              item.sort === "제품" && (
                <Select.Option key={item.id} value={item.id}>
                  {item.itemName}
                </Select.Option>
              )
          )}
        </Select>
      </Form.Item>
      <Form.Item label="자재">
        <Form.List name="bomList">
          {(fields, { add, remove }) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                rowGap: 15,
              }}
            >
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} align={"baseline"}>
                  <Form.Item
                    noStyle
                    {...restField}
                    name={[name, "materialId"]}
                    rules={[
                      { required: true, message: "자재를 선택해주세요." },
                    ]}
                  >
                    <Select
                      style={{ minWidth: 341 }}
                      onChange={(value) => onMaterialSelect(value, form, name)}
                    >
                      {itemList.map(
                        (item) =>
                          item.sort === "자재" && (
                            <Select.Option key={item.id} value={item.id}>
                              {item.itemName}
                            </Select.Option>
                          )
                      )}
                    </Select>
                  </Form.Item>
                  <Form.Item {...restField} noStyle name={[name, "buyPrice"]}>
                    <Input placeholder="매입단가" disabled />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    noStyle
                    name={[name, "requiredAmount"]}
                    rules={[
                      { required: true, message: "소요량을 입력해주세요." },
                    ]}
                  >
                    <Input
                      placeholder="소요량"
                      onChange={(value) => onPriceChange(value, form, name)}
                    />
                  </Form.Item>
                  <Form.Item {...restField} noStyle name={[name, "price"]}>
                    <Input placeholder="금액" disabled />
                  </Form.Item>
                  <Form.Item {...restField} noStyle name={[name, "note"]}>
                    <Input placeholder="비고" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                자재추가
              </Button>
            </div>
          )}
        </Form.List>
      </Form.Item>
    </>
  );
};

export default BomForm;
