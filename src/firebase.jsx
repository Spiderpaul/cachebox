import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCLVfOpQear0iRlTSmphJZQIrTKT15FvhI",
    authDomain: "cachebox-7fa78.firebaseapp.com",
    projectId: "cachebox-7fa78",
    storageBucket: "cachebox-7fa78.appspot.com",
    messagingSenderId: "432419650548",
    appId: "1:432419650548:web:261a1e760e9707f65dd7a1"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);

  export { auth, signOut };