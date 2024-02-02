import { useState, useEffect } from "react";
import fetchApi from "../../../../../modules/api";
import { Button, Form, Input, Select, Space } from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";

const BomForm = ({ form }) => {
    // 물품 목록
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        // 물품 목록조회
        fetchItemList();
    }, []);

    // 물품 목록 조회
    const fetchItemList = async () => {
        try {
            const response = await fetchApi.get('/item');
            setItemList(response.data.data);
        } catch (error) {
            console.error("물품 목록 조회 에러:", error);
        }
    };

    // 자재 선택 시 매입단가 설정
    const onMaterialSelect = (value, formInstance, name) => {
        const selectedMaterial = itemList.find(item => item.id === value);
        if (selectedMaterial) {
            const subItemList = formInstance.getFieldValue('subItemList');
            const updatedSubItemList = [...subItemList];
            updatedSubItemList[name].buyPrice = selectedMaterial.buyPrice;

            // 금액 변경
            if(!isNaN(updatedSubItemList[name].buyPrice * updatedSubItemList[name].requiredAmount)) {
                updatedSubItemList[name].price = updatedSubItemList[name].buyPrice * updatedSubItemList[name].requiredAmount;
            }


            formInstance.setFieldsValue({
                subItemList: updatedSubItemList,
            });
        }
    };

    // 소요량 입력에 따른 금액 계산
    const onPriceChange  = (value, formInstance, name) => {
        const subItemList = formInstance.getFieldValue('subItemList');
        const updatedSubItemList = [...subItemList];

        if(!isNaN(updatedSubItemList[name].buyPrice * updatedSubItemList[name].requiredAmount)) {
            updatedSubItemList[name].price = updatedSubItemList[name].buyPrice * updatedSubItemList[name].requiredAmount;
        }

        formInstance.setFieldsValue({
            subItemList: updatedSubItemList,
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
                rules={[{ required: true, message: '제품을 선택해주세요.' }]}
            >
                <Select>
                    {itemList.map((item) => (
                        item.sort === "제품" && (
                            <Select.Option key={item.id} value={item.id}>
                                {item.itemName}
                            </Select.Option>
                        )
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label="자재"
            >
                <Form.List
                    name="bomList"
                    // initialValue={[
                    //   {
                    //     itemId: 1,
                    //     price: 1000,
                    //     note: "",
                    //   },
                    //   {
                    //     itemId: 3,
                    //     price: 3000,
                    //     note: "",
                    //   },
                    // ]}
                >
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
                                        name={[name, 'materialId']}
                                        rules={[{ required: true, message: '자재를 선택해주세요.' }]}
                                    >
                                        <Select style={{ minWidth: 120 }} onChange={(value) => onMaterialSelect(value, form, name)}>
                                            {itemList.map((item) => (
                                                <Select.Option key={item.id} value={item.id}>
                                                    {item.itemName}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        noStyle
                                        name={[name, 'buyPrice']}
                                    >
                                        <Input placeholder="매입단가" disabled />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        noStyle
                                        name={[name, 'requiredAmount']}
                                        rules={[{ required: true, message: '소요량을 입력해주세요.' }]}
                                    >
                                        <Input placeholder="소요량" onChange={(value) => onPriceChange(value, form, name)}/>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        noStyle
                                        name={[name, 'price']}
                                    >
                                        <Input placeholder="금액" disabled/>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        noStyle
                                        name={[name, 'note']}
                                    >
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