import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProfileImage } from "../utils";
import { getCurrentProfile } from "../redux/modules/profiles";
import defaultImg from "../assets/default.png";

function Sidebar({ users: { user }, getCurrentProfile }) {
  const [image, setImage] = useState("");
  const [errored, setErrored] = useState(false);
  useEffect(() => {
    getCurrentProfile();
    if (user) {
      setImage(getProfileImage(user._id));
    }
  }, [getCurrentProfile, user]);
  function onError() {
    if (!errored) {
      setErrored(true);
      setImage(defaultImg);
    }
  }
  return (
    <div>
      <div className="sidebar">
        <div>
          <Link to="/home">
            <img src={image} alt="" className="profile" onError={onError} />
          </Link>
        </div>
        <Link to="/home">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/developers">Developers</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps, { getCurrentProfile })(Sidebar);
