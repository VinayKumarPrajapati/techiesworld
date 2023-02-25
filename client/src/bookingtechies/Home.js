import { userSelector, useSelector, useStore } from "react-redux";
const Home = () => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div>
      Home Page
      {JSON.stringify(user)}
    </div>
  );
};
export default Home;
