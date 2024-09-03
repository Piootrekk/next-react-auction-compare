"use server";

import createServerClientSupabase from "@/lib/supabase/server";
const authCheck = () => {
  const supabase = createServerClientSupabase();
  return supabase.auth.getSession();
};
export { authCheck };
