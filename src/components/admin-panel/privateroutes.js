import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ShowBlog from "./blog/showblog";
import Comment from "./comment/comment";

const PrivateRoute = () => {
  const auth = localStorage.getItem("user");

  return (
    <Switch>
      {auth ? (
        <>
          {/* Your private route components go here */}
          <Route path="/all-blogs" element={<ShowBlog/>} />
          <Route path="/all-comment" component={Comment} />
          {/* Add other private routes here */}
        </>
      ) : (
        <Redirect to="/admin-login" />
      )}
    </Switch>
  );
};

export default PrivateRoute;
