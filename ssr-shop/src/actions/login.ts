"use server";

import { loginSchema, TLoginSchema } from "@/lib/schema/authSchema";
import createServerClientSupabase from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const login = async (formData: FormData) => {
  const supabase = createServerClientSupabase();

  const data: TLoginSchema = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const parsedData = loginSchema.safeParse(data);

  if (!parsedData.success) {
    console.log(parsedData.error);
    redirect("/error");
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
};

export { login };
