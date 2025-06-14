import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <>
      <div className="post__navigation">
        <div className="post__navigation--active">전체</div>
        <div>나의 글</div>
      </div>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">패스트캠퍼스</div>
            <div className="post__date">2025.06.13 금요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            voluptatum consectetur, magni similique est nobis! Possimus labore
            deleniti aut impedit suscipit dolorem ipsum. Commodi minus quaerat
            quae repellendus magnam id?
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
