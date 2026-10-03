import { toast } from 'react-toastify';

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
};
