"use server";

import createServerClientSupabase from "@/lib/supabase/server";
const authCheck = async () => {
  const supabase = createServerClientSupabase();
  const user = await supabase.auth.getUser();
  return user;
};
export { authCheck };
