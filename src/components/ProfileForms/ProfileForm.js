import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCurrentProfile,
  createProfile,
  uploadProfileImage,
} from "../../redux/modules/profiles";
import { useNavigate } from "react-router-dom";

const initialState = {
  company: "",
  website: "",
  location: "",
  country: "",
  status: "",
  skills: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
  github: "",
};

const ProfileForm = ({
  profiles: { profile, loading },
  getCurrentProfile,
  createProfile,
  uploadProfileImage,
  history,
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  useEffect(() => {
    if (!profile) {
      getCurrentProfile();
    }
    if (profile && !loading) {
      const profileData = { ...initialState };
      // to do
      setFormData(profileData);
    }
  }, [profile, getCurrentProfile, loading]);
  const {
    company,
    website,
    location,
    country,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    github,
  } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, navigate, profile ? true : false);
  };
  const onFileChange = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    uploadProfileImage(data);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="main" style={{ width: 600, textAlign: "center" }}>
      <p className="form-title">Edit Profile</p>
      <form className="form1" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status" value={status} onChange={onChange}>
            <option>* Select Professional status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <input type="file" onChange={onFileChange}></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={country}
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short Bio of Yourself"
            name="bio"
            value={bio}
            onChange={onChange}
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
          >
            Social Network
          </button>
        </div>
        {displaySocialInputs ? (
          <Fragment>
            <div>
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              ></input>
            </div>
            <div>
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              ></input>
            </div>
            <div>
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="Youtube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              ></input>
            </div>
            <div>
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              ></input>
            </div>
            <div>
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              ></input>
            </div>
            <div>
              <i className="fab fa-github fa-2x"></i>
              <input
                type="text"
                placeholder="Github URL"
                name="github"
                value={github}
                onChange={onChange}
              ></input>
            </div>
          </Fragment>
        ) : (
          <Fragment />
        )}
        <input type="submit" className="btn btn-primary"></input>
      </form>
    </div>
  );
};

ProfileForm.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  uploadProfileImage: PropTypes.func.isRequired,
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps, {
  createProfile,
  uploadProfileImage,
  getCurrentProfile,
})(ProfileForm);
