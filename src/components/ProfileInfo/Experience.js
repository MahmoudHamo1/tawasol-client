import React from "react";
import { formatData } from "../../utils";

const Experience = ({ profile, deleteExperience }) => {
  return (
    <div>
      {profile.experience.map((e) => (
        <div key={e._id} className="container">
          {deleteExperience !== undefined ? (
            <a href="#!" onClick={() => deleteExperience(e._id)}>
              <i className="fas fa-trash delete"></i>
            </a>
          ) : null}
          <p>
            &#127891; {e.current ? "Works" : "Worked"} as <b>{e.title}</b> at{" "}
            <b>{e.company}</b>
          </p>
          <small>
            from {formatData(e.from)} to{" "}
            {e.current ? "Current" : formatData(e.to)}
          </small>
        </div>
      ))}
    </div>
  );
};
export default Experience;
