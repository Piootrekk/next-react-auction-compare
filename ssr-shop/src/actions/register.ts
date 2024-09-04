"use server";

import { signUpSchema, TSignUpSchema } from "@/lib/schema/authSchema";
import { revalidatePath } from "next/cache";

import createServerClientSupabase from "@/lib/supabase/server";

const register = async (_previousState: any, formData: FormData) => {
  const supabase = createServerClientSupabase();

  const data: TSignUpSchema = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const parsedData = signUpSchema.safeParse(data);

  if (!parsedData.success) {
    const emailError = parsedData.error.errors.find(
      (error) => error.path[0] === "email"
    );
    const passwordError = parsedData.error.errors.find(
      (error) => error.path[0] === "password"
    );
    const confirmPasswordError = parsedData.error.errors.find(
      (error) => error.path[0] === "confirmPassword"
    );

    return {
      zodError: { emailError, passwordError, confirmPasswordError },
    };
  }

  const signUp = await supabase.auth.signUp(data);

  if (signUp.error) {
    return { sbError: signUp.error.message };
  }
  revalidatePath("/", "layout");
};

export { register };
