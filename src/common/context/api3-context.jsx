import { useState, useEffect, useContext } from "react";
import { createContext} from "react";
import { useRequestData } from "../../hooks/useRequestData";
import { URLAPI } from "../constants/URLAPI";
import { useNavigate } from "react-router-dom";

export const PurchaseContext = createContext();
export const PurchaseProvider = ({ children }) => {
  const navigate = useNavigate();
  const [usersData, isUsersDataLoading, isUsersDataError] = useRequestData(
    `${URLAPI}users`,
    []
  );

  const [usersPurchase, setUsersPurchase] = useState(usersData);

  useEffect(() => {}, [usersPurchase, setUsersPurchase]);

  const logUser = (userLogin) => {
    const user = usersData.find(
      (user) =>
        user.nickname.toUpperCase() === userLogin.nickname.toUpperCase()
    );

    if (!user || user.password !== userLogin.password) {
      alert("Nickname ou senha incorretos!");
      return;
    }

    const { nickname, profileID } = user;
    localStorage.setItem("AUTHORIZATION", profileID);
    navigate(`/club/${nickname}`);
  };

  return (
    <PurchaseContext.Provider
      value={{
        usersPurchase,
        setUsersPurchase,
        isUsersDataLoading,
        isUsersDataError,
        logUser
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};