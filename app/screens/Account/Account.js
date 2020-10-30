import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {
  const [login, setlogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setlogin(false) : setlogin(true);
    });
  }, []);

  if (login === null) return <Loading isVisible={true} text="Cargando..." />;

  return login ? <UserLogged /> : <UserGuest />;
}
