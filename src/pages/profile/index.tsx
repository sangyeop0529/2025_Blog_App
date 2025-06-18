import Profile from "components/Profile";
import Header from "components/Header";
import Footer from "components/Footer";
import PostList from "components/PostList";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Profile />
      <PostList hasNavigation={false} defaultTab="my" />
      <Footer />
    </>
  );
};

export default ProfilePage;
