import React from 'react';
import { ReactElement } from 'react';
import ArrowBack from "@material-ui/icons/ArrowBack";
import {IconButton} from "@material-ui/core";
import { useHistory } from 'react-router-dom';


export const BackButton: React.FC = (): ReactElement => {
  const history = useHistory();

  const handleClickButton = ():void => {
    history.goBack();
  };

  return (
    <IconButton
      style={{marginRight: 20}}
      color="primary"
      onClick={handleClickButton}
    >
      <ArrowBack />
    </IconButton>
  );
};
