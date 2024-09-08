"use server";

import { signUpSchema, TSignUpSchema } from "@/lib/schema/authSchema";
import { revalidatePath } from "next/cache";
import { returnZodErrorsObject } from "@/utils/returnZodErrorobject";
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
    const errorObject = returnZodErrorsObject(parsedData.error.errors);
    return { zodError: errorObject };
  }

  const signUp = await supabase.auth.signUp(data);

  if (signUp.error) {
    return { sbError: signUp.error.message };
  }
  revalidatePath("/");
};

export { register };
