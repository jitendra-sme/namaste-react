import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Jitendra",
    email: "test@test.com",
  },
});
export default UserContext;
