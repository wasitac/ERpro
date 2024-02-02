/**
 * 이지홍
 */
import ProfileForm from "./ProfileForm";
import PasswordForm from "./PasswordForm";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Row, Col } from "antd";

const ProfilePage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // navigate 함수를 사용하여 뒤로 이동
  };
  return (
    <div>
      <Layout
        style={{
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Row justify="center">
          <Col span={4}>
            <Button
              type="default"
              style={{
                left: 20,
              }}
              onClick={goBack}
            >
              뒤로 가기
            </Button>
          </Col>

          <Col span={20}>
            <h1 style={{ fontSize: "32px", left: 20 }}>내 정보 페이지</h1>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} md={18} lg={16}>
            <h2 style={{ fontSize: "20px", margin: "20px" }}>내 정보 수정</h2>
            <ProfileForm />
          </Col>
          <Col xs={24} md={18} lg={16}>
            <h2 style={{ fontSize: "20px", margin: "20px" }}>비밀번호 변경</h2>
            <PasswordForm />
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default ProfilePage;
