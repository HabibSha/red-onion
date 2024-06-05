import { useEffect, useState } from "react";

import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);
const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return {
    currentUser,
  };
};

export default useAuth;
