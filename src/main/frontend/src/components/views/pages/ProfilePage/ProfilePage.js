/**
 * 이지홍
 */
import ProfileForm from "./ProfileForm";
import PasswordForm from "./PasswordForm";

const ProfilePage = () => {
  return (
    <div>
      <h1>내 정보 페이지</h1>
      <div>내 정보 수정</div>
      <ProfileForm />
      <div>비밀번호 변경</div>
      <PasswordForm />
    </div>
  );
};

export default ProfilePage;
