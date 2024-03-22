"use client";
import { useTransition } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { LockOpen1Icon } from "@radix-ui/react-icons";

export default function Logout() {
  const queryClient = useQueryClient();

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createSupabaseBrowser();
    startTransition(async () => {
      await supabase.auth.signOut();
      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.refresh();
    });
  };

  return (
    <Button
      className="w-full items-center justify-between rounded-none"
      variant="ghost"
      onClick={handleLogout}
    >
      Logout <LockOpen1Icon className={cn({ "animate-spin": isPending })} />
    </Button>
  );
}
