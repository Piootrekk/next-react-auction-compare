import supabase from "./supabase";
const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session?.user ?? null;
};

const tockenVerify = async (token: string) => {
  const { data, error } = await supabase.auth.getUser(token);
  if (error) return { user: null };
  return data;
};

export { signUp, signIn, getCurrentUser, tockenVerify };
