import { Button, Card, Form, Input, Select, Space, Typography } from "antd";
import { CloseOutlined } from '@ant-design/icons';

const BomForm = ({ form }) => {
    // 금액 계산 로직
    const calculateAmount = (buyPrice, requiredAmount) => {
        const price = Number(buyPrice) * Number(requiredAmount);
        return isNaN(price) ? undefined : price;
    };

    return (
        <>
            <Form.Item label="물품" name="itemId">
                <Input />
            </Form.Item>

            {/* Nest Form.List */}
            <Form.Item label="자제목록">
                <Form.List name='list'>
                    {(subFields, subOpt) => (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: 16,
                            }}
                        >
                            {subFields.map((subField,index) => (
                                <Space key={subField.key}>
                                    <Form.Item noStyle name={[subField.name, 'materialId']}>
                                        <Select style={{ minWidth: 120 }}>
                                            <Select.Option value="SALES">영업</Select.Option>
                                            <Select.Option value="PRODUCTION">생산</Select.Option>
                                            <Select.Option value="HR">인사</Select.Option>
                                            <Select.Option value="LOGISTICS">물류</Select.Option>
                                            <Select.Option value="ADMIN">관리</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item noStyle name={[subField.name, 'buyPrice']}>
                                        <Input
                                            placeholder="매입단가"
                                            onBlur={() => {
                                                form.setFieldsValue({
                                                    [`list[${index}].price`] : calculateAmount(
                                                        form.getFieldValue().list[`${index}`].buyPrice,
                                                        form.getFieldValue().list[`${index}`].requiredAmount
                                                    ),
                                                });
                                                console.log("금액:", form.getFieldValue(`list[${index}].price`));
                                            }}
                                        />
                                    </Form.Item>
                                    <Form.Item noStyle name={[subField.name, 'requiredAmount']}>
                                        <Input
                                            placeholder="소요량"
                                            onBlur={() => {
                                                form.setFieldsValue({
                                                    [`list[${index}].price`] : calculateAmount(
                                                        form.getFieldValue().list[`${index}`].buyPrice,
                                                        form.getFieldValue().list[`${index}`].requiredAmount
                                                    ),
                                                });
                                                console.log("금액:", form.getFieldValue(`list[${index}].price`));
                                            }}
                                        />
                                    </Form.Item>
                                    <Form.Item noStyle name={[subField.name, 'price']}>
                                        <Input placeholder="금액" disabled={true}/>
                                    </Form.Item>
                                    <Form.Item noStyle name={[subField.name, 'note']}>
                                        <Input placeholder="비고" />
                                    </Form.Item>
                                    <CloseOutlined
                                        onClick={() => {
                                            subOpt.remove(subField.name);
                                        }}
                                    />
                                </Space>
                            ))}
                            <Button type="dashed" onClick={() => subOpt.add()} block>
                                + 자재 추가
                            </Button>
                        </div>
                    )}
                </Form.List>
            </Form.Item>

            {/*<Form.Item noStyle shouldUpdate>*/}
            {/*    {() => (*/}
            {/*        <Typography>*/}
            {/*            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>*/}
            {/*        </Typography>*/}
            {/*    )}*/}
            {/*</Form.Item>*/}
        </>
    );
};

export default BomForm;