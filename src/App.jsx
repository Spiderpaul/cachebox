import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import './App.css'
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import { selectUser } from "./app/reducers/userSlice";
// import { auth } from "./firebase";

function App() {
  // const navigate = useNavigate();
  const isLoggedIn = useSelector(selectUser);
  //Hocks---------------------------------------------------------
  const [validate, setvalidate] = useState(false);

  

  useEffect(() => {
    
    //PARA FIREBASE
    /* const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe; */
  }, [])


  //Hocks---------------------------------------------------------
  //Estilos--------------------------------------------------------------------
  const Div = styled.div`
  `;
  //Estilos--------------------------------------------------------------------

  return (
    <Div>
      <Router>
          {
            isLoggedIn === null ? (<Login />) :  
              (<Routes>
                  <Route path='/' element={<Home />} />
              </Routes>)
          }
      </Router>
    </Div>
  )
}

export default App
