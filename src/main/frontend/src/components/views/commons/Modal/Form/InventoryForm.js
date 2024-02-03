// 이지홍
import { Form, Input, Radio, Select } from "antd";
import DataTable from "../../../pages/MainPage/DataTable";
const InventoryForm = () => {
  return (
    <DataTable keyOfmenu="orders" />
    // <div>
    //   <Form.Item name="id" noStyle>
    //     <Input type="hidden" />
    //   </Form.Item>
    //   <Form.Item
    //   label="입출고번호"
    //   name="storeId"

    //   >
    //         <Input disabled />
    //       </Form.Item>
    //   <Form.Item label="담당자" name="userId">
    //     <Select>
    //       <Select.Option value={1001}>홍길동</Select.Option>
    //     </Select>
    //   </Form.Item>
    //   <Form.Item
    //     label="거래처명"
    //     name="bnm"
    //     rules={[
    //       {
    //         required: true,
    //         message: "거래처명을 입력해주세요",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>
    //   <Form.Item
    //     label="사업자번호"
    //     name="bno"
    //     rules={[
    //       {
    //         required: true,
    //         message: "사업자번호를 입력해주세요",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>
    //   <Form.Item
    //     label="유형"
    //     name="sort"
    //     rules={[
    //       {
    //         required: true,
    //         message: "유형을 선택해주세요",
    //       },
    //     ]}
    //   >
    //     <Radio.Group value="매출처">
    //       <Radio value="매출처">매출처</Radio>
    //       <Radio value="매입처">매입처</Radio>
    //       <Radio value="혼합">혼합</Radio>
    //     </Radio.Group>
    //   </Form.Item>
    //   <Form.Item
    //     label="대표자명"
    //     name="pnm"
    //     rules={[
    //       {
    //         required: true,
    //         message: "대표자명을 입력해주세요",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>
    //   <Form.Item
    //     label="사업장주소"
    //     name="badr"
    //     rules={[
    //       {
    //         required: true,
    //         message: "사업장주소를 입력해주세요",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>
    //   <Form.Item
    //     label="업태"
    //     name="bsector"
    //     rules={[
    //       {
    //         required: true,
    //         message: "업태를 입력해주세요",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     label="종목"
    //     name="btype"
    //     rules={[
    //       {
    //         required: true,
    //         message: "업종을 입력해주세요",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>
    //   <Form.Item
    //     label="전화번호"
    //     name="phone"
    //     rules={[
    //       {
    //         required: true,
    //         message: "전화번호를 입력해주세요",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>
    //   <Form.Item
    //     label="이메일"
    //     name="email"
    //     rules={[
    //       {
    //         required: true,
    //         message: "이메일을 입력해주세요",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>
    // </div>
  );
};

export default InventoryForm;
