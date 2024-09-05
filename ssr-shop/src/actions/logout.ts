"use server";
import createServerClientSupabase from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

const logout = async () => {
  const supabaseClient = createServerClientSupabase();
  await supabaseClient.auth.signOut();
  revalidatePath("/", "layout");
};

export { logout };
