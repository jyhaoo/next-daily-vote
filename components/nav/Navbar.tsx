"use client";
import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useUser } from "@/lib/hook";
import LoginForm from "./LoginForm";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <h1 className="text-3xl font-bold">Daily Votes </h1>
        <RocketIcon className="w-5 h-5 amimate-launch transition-all transform text-green-500" />
      </Link>
      <RenderProfile />
    </nav>
  );
}

const RenderProfile = () => {
  const { data, isFetching } = useUser();

  if (isFetching) {
    return <></>;
  }

  if (data?.user?.id) {
    return <Profile user={data?.user} />;
  } else {
    <LoginForm />;
  }

  // if data, render profile
  // else render signup
};
