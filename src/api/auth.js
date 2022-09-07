import { apiClient } from "./client";

const Login = (email, password) =>
  apiClient.post("/login", { email, password });
const Signup = (fullname, username, email, password) =>
  apiClient.post("/signup", { fullname, username, email, password });
const Update = (fullname, username, pic) =>
  apiClient.put("/update", { fullname, username, pic });
const allUsers = () => apiClient.get("/all-users");

const follow = (followId) => apiClient.put("/follow", { followId });
const unFollow = (unfollowId) => apiClient.put("/unfollow", { unfollowId });

const userProfile = (userId) => apiClient.post("/user-profile", { userId });

export default {
  Login,
  Signup,
  Update,
  allUsers,
  follow,
  unFollow,
  userProfile,
};
