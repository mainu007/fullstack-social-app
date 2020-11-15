import React from "react";
import { Route, Switch } from "react-router-dom";

import {
   Admin,
   Home,
   Menu,
   PageNotFound,
   EditPost,
   NewPost,
   SinglePost,
   SingleUserPosts,
   UsersContainer,
   PrivateRoute,
   FindPeople,
   ForgotPassword,
   Profile,
   EditProfile,
   ResetPassword,
   SignIn,
   Signup,
} from "../components";

const MainRouter = () => {
   return (
      <>
         <Menu />
         <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path={`/admin`} component={Admin} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route
               exact
               path="/reset-password/:resetPasswordToken"
               component={ResetPassword}
            />
            <PrivateRoute
               exact
               path={`/posts/by/:posterId`}
               component={SingleUserPosts}
            />
            <PrivateRoute exact path={`/post/create`} component={NewPost} />
            <PrivateRoute
               exact
               path="/post/edit/:postId"
               component={EditPost}
            />
            <Route exact path="/post/:postId" component={SinglePost} />
            <Route exact path={`/users`} component={UsersContainer} />
            <PrivateRoute exact path={`/findpeople`} component={FindPeople} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={SignIn} />
            <PrivateRoute
               exact
               path={`/user/edit/:userId`}
               component={EditProfile}
            />
            <Route exact path={`/user/:userId`} component={Profile} />
            <Route exact path="" component={PageNotFound} />
         </Switch>
      </>
   );
};

export default MainRouter;
