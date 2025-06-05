import React from "react";
import { formatData } from "../../utils";

const Education = ({ profile, deleteEducation }) => {
  return (
    <div>
      {profile.education.map((e) => (
        <div key={e._id} className="container">
          {deleteEducation !== undefined ? (
            <a href="#!" onClick={() => deleteEducation(e._id)}>
              <i className="fas fa-trash delete"></i>
            </a>
          ) : null}
          <p>
            &#127891; {e.current ? "Studies" : "Studied"} <b>{e.degree}</b> of{" "}
            <b>{e.fieldofstudy}</b> at <b>{e.school}</b>
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
export default Education;
