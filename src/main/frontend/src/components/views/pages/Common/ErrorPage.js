import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Result } from 'antd';
function ErrorPage() {

    const navigate = useNavigate();
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <Result
                status="403"
                title="403"
                subTitle="권한이 없는 요청입니다."
                extra={<Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{ backgroundColor: "#66bd00"}}
                    onClick={() => {
                    navigate('/login');
                }}>로그인 페이지로 이동</Button>}
            />
        </div>
    )
}
export default ErrorPage;