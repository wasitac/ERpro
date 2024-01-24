/**
 * 이지홍
 */
import ProfileForm from "./ProfileForm";
import PasswordForm from "./PasswordForm";

const ProfilePage = () => {
  return (
    <div>
      <div>내 정보 수정 페이지</div>
      <ProfileForm />
      <PasswordForm />
    </div>
  );
};

export default ProfilePage;
