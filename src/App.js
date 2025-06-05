// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Fragment } from "react/jsx-runtime";
// import Landing from "./components/Landing";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import store from "./redux/store";
// import { Provider } from "react-redux";
// import Register from "./components/Users/Register";
// import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import Alert from "./components/Alert";

// const options = {
//   position: positions.TOP_RIGHT,
//   timeout: 5000,
//   offset: "30px",
//   transition: transitions.SCALE,
// };

// function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <AlertProvider template={AlertTemplate} {...options}>
//           <Fragment>
//             <Alert />
//             <Navbar></Navbar>
//             <Routes>
//               <Route exact path="/" element={<Landing></Landing>}></Route>
//               <Route path="/register" element={<Register></Register>}></Route>
//             </Routes>
//           </Fragment>
//         </AlertProvider>
//       </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;
// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Landing from "./components/Landing";
import "./App.css";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import { Provider } from "react-redux";
import Register from "./components/Users/Register";
import Alert from "./components/Alert";
import Login from "./components/Users/Login";
import Home from "./components/Home";
import Private from "./components/Private";
import ProfileForm from "./components/ProfileForms/ProfileForm";
import AddEducation from "./components/ProfileForms/AddEducation";
import AddExperience from "./components/ProfileForms/AddExperience";
import { useEffect } from "react";
import { setAuthToken } from "./utils";
import Developers from "./components/Developers";
import { loadUser } from "./redux/modules/users";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post";

// 🔥 Add ToastContainer from react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Alert /> {/* This listens to Redux and shows toast */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/home"
              element={<Private component={Home}></Private>}
            />
            <Route
              exact
              path="/create-profile"
              element={<Private component={ProfileForm}></Private>}
            />
            <Route
              exact
              path="/add-education"
              element={<Private component={AddEducation}></Private>}
            />
            <Route
              exact
              path="/add-experience"
              element={<Private component={AddExperience}></Private>}
            />
            <Route
              exact
              path="/developers"
              element={<Private component={Developers}></Private>}
            />
            <Route
              exact
              path="/profile/:id"
              element={<Private component={Profile}></Private>}
            />
            <Route
              exact
              path="/settings"
              element={<Private component={Settings}></Private>}
            />
            <Route
              exact
              path="/edit-profile"
              element={<Private component={ProfileForm}></Private>}
            />
            <Route
              exact
              path="/posts"
              element={<Private component={Posts}></Private>}
            />
            <Route
              exact
              path="/posts/:id"
              element={<Private component={Post}></Private>}
            />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
