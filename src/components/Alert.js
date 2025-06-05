// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { useAlert } from "react-alert";

// const Alert = ({ alert }) => {
//   const showAlert = useAlert();
//   useEffect(() => {
//     if (alert.show) {
//       showAlert.show(alert.msg, { type: alert.type });
//     }
//   });
//   return <></>;
// };

// const mapStateToProps = (state) => {
//   return {
//     alert: state.alerts,
//   };
// };

// export default connect(mapStateToProps)(Alert);
// components/Alert.js
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Alert = () => {
  const alert = useSelector((state) => state.alerts);

  useEffect(() => {
    if (alert.show && alert.msg) {
      toast[alert.type](alert.msg); // type = info, success, warning, error
    }
  }, [alert]);

  return null; // This component only triggers the toast
};

export default Alert;
