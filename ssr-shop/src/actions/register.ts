"use server";

import { signUpSchema, TSignUpSchema } from "@/lib/schema/authSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import createServerClientSupabase from "@/lib/supabase/server";

const register = async (formData: FormData) => {
  const supabase = createServerClientSupabase();

  const data: TSignUpSchema = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const parsedData = signUpSchema.safeParse(data);

  if (!parsedData.success) {
    console.log("Parse", parsedData.error);
    redirect("/error");
  }

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log("supabase", error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
};

export { register };
