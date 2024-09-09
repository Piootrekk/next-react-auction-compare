"use server";
import createServerClientSupabase from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

const logout = async () => {
  const supabaseClient = createServerClientSupabase();
  await supabaseClient.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
};

export { logout };
