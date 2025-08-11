/* eslint-disable react-refresh/only-export-components */
import toast, { Toaster } from 'react-hot-toast';

export const notifySuccess = text => toast.success(text);
export const notifyInfo = text => toast(text);
export const notifyError = text => toast.error(text);

export default function ToasterComponent() {
  return <Toaster position="top-right" />;
}
