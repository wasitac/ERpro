
import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Divider, Radio, Select } from "antd";
function EstimateModal(props) {
  // antd의 Form관련 hook 사용을 위함
  const [form] = Form.useForm();
  
  // 모달 모드(add:등록, edit:수정)
  const [mode, setMode] = useState('add');
  
  useEffect(() => {
    // 모달이 열릴 때마다 모드를 설정
    if (props.dataForEdit != null) {
      // 수정 모드일 때
      setMode('edit');
      form.setFieldsValue(props.dataForEdit); // 폼에 원래값 설정
    } else {
      // 등록 모드일 때
      setMode('add');
    }
  }, [props.modalStatus]);
  
  // form submit
  const onSubmit = (values) => {
    form
    .validateFields() // 현재 입력 필드를 유효성 검사
    .then((values) => {
      console.log('Received values:', values);
      
      if (mode === 'add') {
        // TODO: 저장 API 호출
      } else if (mode === 'edit') {
        // TODO: 수정 API 호출
      }
      
    })
    .catch((errorInfo) => {
      // 유효성 검사 실패 시 수행할 로직
    });
  };
  
  // 모달 닫힘
  const onCancel = () => {
    // Form 필드 초기화
    form.resetFields();
    props.handleCloseModal();
  };
  
  return (
    <Modal
      title={mode === 'add'? "거래처 등록":"거래처 수정"}
      open={props.modalStatus}
      onCancel={onCancel}
      cancelText="취소"
      okText={mode === 'add'? "저장":"수정"}
      okButtonProps={{
        style: {
          backgroundColor: '#66bd00'
        },
      }}
      onOk={onSubmit}
      style={{ minWidth: '650px'}}
    >
      <Divider />
      <Form
        form={form}
        layout="horizontal"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
      >
        <Form.Item 
          label="담당자"
          name="userid"
        >
          <Select>
            <Select.Option value="1">홍길동</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="거래처명"
          name="bnm"
          rules={[
            {
              required: true,
              message: '거래처명을 입력해주세요',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="사업자번호"
          name="bno"
          rules={[
            {
              required: true,
              message: '사업자번호를 입력해주세요',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="유형"
          name="sort"
          rules={[
            {
              required: true,
              message: '유형을 선택해주세요',
            },
          ]}
        >
          <Radio.Group value="매출처">
            <Radio value="매출처">매출처</Radio>
            <Radio value="매입처">매입처</Radio>
            <Radio value="혼합">혼합</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="대표자명"
          name="pnm"
          rules={[
            {
              required: true,
              message: '대표자명을 입력해주세요',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="사업장주소"
          name="badr"
          rules={[
            {
              required: true,
              message: '사업장주소를 입력해주세요',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="업태"
          name="bsector"
          rules={[
            {
              required: true,
              message: '업태를 입력해주세요',
            },
          ]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          label="종목"
          name="btype"
          rules={[
            {
              required: true,
              message: '업종을 입력해주세요',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="전화번호"
          name="phone"
          rules={[
            {
              required: true,
              message: '전화번호를 입력해주세요',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="이메일"
          name="email"
          rules={[
            {
              required: true,
              message: '이메일을 입력해주세요',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      <Divider />
    </Modal>
  );
}


export default EstimateModal;