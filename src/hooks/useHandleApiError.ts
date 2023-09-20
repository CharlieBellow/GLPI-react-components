import { useCallback, useEffect, useState } from "react";

import { useMessage } from "@/hooks";

import { DEFAULT_ERRORS } from "@/exceptions/default-errors";
import { HttpError } from "@/exceptions/http-error";

/**
 * @description Provide a error and this hook will handle it and show a message to user
 */
export function useHandleApiError() {
  const [error, setError] = useState<string | null>(null);
  const { errorMessage } = useMessage();

  const handleError = useCallback((err: unknown) => {
    if (err instanceof HttpError) {
      setError(err.message);
      return;
    }
    setError(DEFAULT_ERRORS.generic);
  }, []);

  useEffect(() => {
    if (error) {
      errorMessage(error);
      setError(null);
    }
  }, [error, errorMessage]);

  return handleError;
}
