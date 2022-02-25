import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "./Navigation";
import Profile from "routes/Profile";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route
              exact
              path="/"
              element={
                <div className="routePage">
                  <Home userObj={userObj} />
                </div>
              }
            />
            <Route
              exact
              path="/profile"
              element={
                <div className="routePage">
                  <Profile userObj={userObj} refreshUser={refreshUser} />
                </div>
              }
            />
          </>
        ) : (
          <Route exact path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
