import Navigation from "../pages/nav";

const Header = ({ navigation }) => {
  // console.log(navigation);
  return (
    <div className={`header`}>
      <h2>Next Movies</h2>
      <div>
        {" "}
        <Navigation navigation={navigation}/>
      </div>
    </div>
  );
};
export default Header;
