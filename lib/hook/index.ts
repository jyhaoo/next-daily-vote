import { useQuery } from "@tanstack/react-query";
import { createSupabaseBrowser } from "../supabase/client";

export function useUser() {
  const supabase = createSupabaseBrowser();
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await supabase.auth.getSession();
      return { user: data.session?.user };
    },
    staleTime: Infinity,
  });
}
