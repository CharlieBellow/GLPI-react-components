import React from "react";

import { FormResetPassword } from "@/app/(public)/(routes)/(auth)/reset-password/components/FormResetPassword";

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: { token: string };
}) {
  if (!searchParams.token) {
    return <div>Token inválido</div>;
  }

  return <FormResetPassword token={searchParams.token} />;
}
