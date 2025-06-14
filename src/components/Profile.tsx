import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <div className="profile__email">test@naver.com</div>
          <div className="profile__name">홍길동</div>
        </div>
      </div>
      <Link to="/" className="profile__logout">
        로그아웃
      </Link>
    </div>
  );
};

export default Profile;
