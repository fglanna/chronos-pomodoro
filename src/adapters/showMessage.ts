import { toast } from 'react-toastify';
import { Dialog } from '../components/Dialog';

export const showMessage = {
  success: (msg: string) => {
    toast.dismiss();
    return toast.success(msg);
  },
  error: (msg: string) => {
    toast.dismiss();
    return toast.error(msg);
  },
  warn: (msg: string) => {
    toast.dismiss();
    return toast.warn(msg);
  },
  warning: (msg: string) => {
    toast.dismiss();
    return toast.warning(msg);
  },
  info: (msg: string) => {
    toast.dismiss();
    return toast.info(msg);
  },
  dismiss: () => toast.dismiss(),
  confirm: (data: string, onClosing: (confirmation: boolean) => void) =>
    toast(Dialog, {
      data,
      onClose: confirmation => {
        if (confirmation) return onClosing(true);
        return onClosing(false);
      },
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    }),
};
