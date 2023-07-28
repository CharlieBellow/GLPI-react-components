import { useCallback } from "react";
import { toast } from "react-toastify";

export function useMessage() {
  const errorMessage = useCallback((message: string) => {
    toast.error(message);
  }, []);

  const successMessage = useCallback((message: string) => {
    toast.success(message);
  }, []);

  const warnMessage = useCallback((message: string) => {
    toast.warn(message);
  }, []);

  const infoMessage = useCallback((message: string) => {
    toast.info(message);
  }, []);

  return { errorMessage, successMessage, warnMessage, infoMessage };
}
