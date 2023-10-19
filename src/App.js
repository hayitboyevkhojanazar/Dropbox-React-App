import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Drive from "./Components/Drive";
import Model from "./Components/Model";
import FolderModel from "./Components/FolderModel";
import Folder from "./Components/Folder";
import PhotoModel from "./Components/PhotoModel";
import PhotoDisplay from "./Components/photoDisplay";
import { useSelector, useDispatch } from "react-redux";
import { selectUid, setLogIn, setLogOut } from "./Slices/user/userSlice";
import Login from "./Components/Registration/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Auth from "./Components/Registration/Auth";
import "./App.css";

function App() {
  const user = useSelector(selectUid);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setLogIn({ uid: user.uid, photo: user.photoURL }));
      } else {
        dispatch(setLogOut({ uid: null, photo: null }));
      }
    });
  });

  return (
    <Router>
      {user ? (
        <>
        <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Drive />} />
              <Route path="/folder/:name/:id" element={<Folder />} />
            </Routes>
          </Container>
          <Model />
          <PhotoModel />
          <FolderModel />
          <PhotoDisplay />
        </>
      ) : (
        <Auth />
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
