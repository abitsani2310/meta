import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  isSupported,
} from "firebase/messaging";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA3P17vMsbFT42cnhS-UWNLFtbj5P7Pwj8",
  authDomain: "sorbannagacom.firebaseapp.com",
  databaseURL: "https://sorbannagacom-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sorbannagacom",
  storageBucket: "sorbannagacom.firebasestorage.app",
  messagingSenderId: "174066720496",
  appId: "1:174066720496:web:d1cba570b05604f4d0ec35",
  measurementId: "G-09SGN4L4J0"
};
const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
const messaging = (async () => {
  try {
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(firebaseApp);
    }
    return null;
  } catch (err) {
    return null;
  }
})();

export const fetchToken = async (setTokenFound, setFcmToken) => {
  return getToken(await messaging, {
    vapidKey:
      "BCSUvH4iS4lLqsSlnLGorXGjCEJKevn5cFk-gipbzawP02UhIX_4dXjFCBCV9MGEaAWjlrOUbGBs_Vhcxx5nPaE",
  })
    .then((currentToken) => {
      if (currentToken) {
        setTokenFound(true);
        setFcmToken(currentToken);

        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        setTokenFound(false);
        setFcmToken();
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.error(err);
      // catch error while creating client token
    });
};

export const onMessageListener = async () =>
  new Promise((resolve) =>
    (async () => {
      const messagingResolve = await messaging;
      onMessage(messagingResolve, (payload) => {
        resolve(payload);
      });
    })()
  );
export const auth = getAuth(firebaseApp);
