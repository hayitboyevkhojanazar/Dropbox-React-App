import { Folder } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setFolder } from "../Slices/channel/channelSlice";
import  deleteFolder from "./Delete/deleteFolder";

function FileContainer({ title, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SelectChannel = () => {
    if (id) {
      dispatch(setFolder({ folderId: id, folderName: title }));
      navigate(`/folder/${title}/${id}`);
    }
  };
  const handleDelete = async () => {
    try {
      await deleteFolder(id);
      console.log("Folder deleted successfully!");
    } catch (error) {
      console.error("Error deleting folder:", error);
    }
  }
  return (
    <Div>
      <Container onClick={SelectChannel}>
        <Folder />
        <span>{title}</span>
        <Button onClick={handleDelete}>Delete</Button>
      </Container>
    </Div>
  );
}

export default FileContainer;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  font-size: 10px;
`;

const Div = styled.div`
`;
const Container = styled.div`
  display: flex;
  width: 287.5px;
  height: 48px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 4px;

  svg {
    height: 24px;
    width: 24px;
    color: rgba(95, 99, 104);
    margin-left: 4px;
  }

  span {
    font-size: 13px;
    margin-left: 10px;
    text-transform: capitalize;
  }
`;
