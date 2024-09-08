"use server";

import { loginSchema, TLoginSchema } from "@/lib/schema/authSchema";
import createServerClientSupabase from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { returnZodErrorsObject } from "@/utils/returnZodErrorobject";
export const login = async (_previousState: any, formData: FormData) => {
  const supabase = createServerClientSupabase();

  const userSchema: TLoginSchema = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const parsedData = loginSchema.safeParse(userSchema);

  if (!parsedData.success) {
    const errorObject = returnZodErrorsObject(parsedData.error.errors);

    return { zodError: errorObject };
  }

  const { error } = await supabase.auth.signInWithPassword(userSchema);

  if (error) {
    return { sbError: error.message };
  }

  revalidatePath("/");
};
