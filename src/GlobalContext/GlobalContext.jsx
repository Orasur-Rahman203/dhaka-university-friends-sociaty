import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tBn from "../Locals/bn/TranslationBN.json";
import tEn from "../Locals/en/TranslationEN.json";



export const GlobalContextCreate=createContext();

// 1534721633663872
// 9b71f27848a1b5b64f5a8a0c595a4c56



i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: tEn
      },
      bn: {
        translation: tBn
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

const GlobalContext = ({children}) => {
const auth=getAuth(app)
const [load, setLoad] = useState(true);
const [user, setUser] = useState({});


const createUser = (email, password) => {
  setLoad(true);
  return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) => {
  setLoad(true);
  return signInWithEmailAndPassword(auth, email, password);
}



  const signInWithGoogle = (googleProvider) => {
    setLoad(true);
    return signInWithPopup(auth, googleProvider);
}


  const signInWithFacebook = (Facebookprovider) => {
    setLoad(true);
    return signInWithPopup(auth, Facebookprovider);
}

//   const signInWithTwitter = (TwitterProvider) => {
//     return signInWithPopup(auth, TwitterProvider);
// }


const LogOutAll=()=>{
  setLoad(true);
  return signOut(auth);
}


useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('inside auth state change', currentUser);

      if (currentUser === null || currentUser.uid) {
          setUser(currentUser);
      }
      setLoad(false);
  });

  return () => {
      unsubscribe();
  }

}, [])


const value={user ,setUser, createUser, signIn, signInWithGoogle, signInWithFacebook, LogOutAll};
  return (
    <GlobalContextCreate.Provider value={value}>
      {children}
    </GlobalContextCreate.Provider>
  );
};

export default GlobalContext;