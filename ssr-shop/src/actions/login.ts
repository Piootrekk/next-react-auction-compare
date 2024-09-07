"use server";

import { loginSchema, TLoginSchema } from "@/lib/schema/authSchema";
import createServerClientSupabase from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export const login = async (_previousState: any, formData: FormData) => {
  const supabase = createServerClientSupabase();

  const userSchema: TLoginSchema = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const parsedData = loginSchema.safeParse(userSchema);

  if (!parsedData.success) {
    const emailError = parsedData.error.errors.find(
      (error) => error.path[0] === "email"
    );
    const passwordError = parsedData.error.errors.find(
      (error) => error.path[0] === "password"
    );

    return {
      zodError: { emailError, passwordError },
    };
  }

  const { error } = await supabase.auth.signInWithPassword(userSchema);

  if (error) {
    return { sbError: error.message };
  }

  revalidatePath("/");
};
