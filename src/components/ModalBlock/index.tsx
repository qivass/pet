import React, {FC, ReactElement, ReactNode} from "react";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import {Dialog, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import {useStylesSignIn} from "../../pages/SignIn";


interface ModalProps {
  title?: string;
  children: ReactNode;
  classes?: ReturnType<typeof useStylesSignIn>;
  visible?: boolean;
  onClose: () => void;
}


export const ModalBlock:FC<ModalProps> = (props:ModalProps):ReactElement | null => {
  const {title, children, visible = false, onClose} = props;

  if (!visible) {
    return null;
  }

  return (
    <Dialog
      open={visible}
      fullWidth
      aria-labelledby="form-dialog-title"
      onClose={onClose}
    >
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}
