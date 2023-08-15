import { AxiosError } from "axios";

import { ServerError } from "./ServerError";

export function getErrorMessage(
  serverError: AxiosError<ServerError>
): ServerError {
  if (serverError.response) {
    const { statusCode, message } = serverError.response.data;
    return {
      statusCode,
      message,
    };
  } else {
    if (serverError.message) {
      return {
        statusCode: 500,
        message: serverError.message,
      };
    }
    return {
      statusCode: 500,
      message: "Não foi possível se conectar ao servidor",
    };
  }
}
