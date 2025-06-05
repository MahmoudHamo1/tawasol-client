import { React, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../redux/modules/profiles";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
  });
  const { company, title, location, from, to, current } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };
  return (
    <div
      className="main"
      style={{ textAlign: "center", width: 700, padding: 15 }}
    >
      <p className="form-title">Add Experience</p>
      <small>* = required field</small>
      <form className="form1" onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="location"
            name="location"
            value={location}
            onChange={onChange}
          ></input>
        </div>
        <div>
          <h3 style={{ marginLeft: 110, textAlign: "left", marginBottom: 20 }}>
            From Date
          </h3>
          <input
            type="date"
            name="from"
            value={from}
            onChange={onChange}
          ></input>
        </div>
        <div>
          <p style={{ marginLeft: 110, textAlign: "left", marginBottom: 20 }}>
            <input
              type="checkbox"
              name="current"
              value={current}
              checked={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />
            Current Job
          </p>
        </div>
        <div>
          <h3 style={{ marginLeft: 110, textAlign: "left", marginBottom: 20 }}>
            To Date
          </h3>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          ></input>
        </div>
        <input type="submit" className="btn btn-primary"></input>
        <Link className="btn btn-light" to="/home">
          Go Back
        </Link>
      </form>
    </div>
  );
};
AddExperience.prototype = {
  addExperience: PropTypes.func.isRequired,
};
export default connect(null, { addExperience })(AddExperience);
