"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export function Header() {
  const pathname = usePathname();
  const isLoggedIn = true; // context or state
  const isAuthPath =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  const authButtons = (
    <div className="flex gap-4">
      <Button variant={"primary"}>Login</Button>
      <Button variant={"primaryOutlined"}>Register</Button>
    </div>
  );
  return (
    <header className="py-6 px-8 border-b border-border bg-base-100 sticky top-0 bg- z-10 shadow-xl sm:shadow-none">
      <div className="mx-auto w-full max-w-[1200px] px-4 flex items-center gap-4">
        <img src="/img/logo.png" className="h-7 mr-auto" />

        {!isAuthPath && <Menu />}

        {!isAuthPath && (isLoggedIn ? <Profile /> : authButtons)}
      </div>
    </header>
  );
}

function Menu() {
  return (
    <>
      {/* <!-- mobile menu button --> */}
      <button className="sm:hidden">
        <img src="/img/hamburger.svg" />
      </button>
      {/* <!-- desktop menu --> */}
      <button className="hidden sm:block text-dark-secondary font-body">
        Kategori
      </button>
    </>
  );
}

function Profile() {
  return (
    <div className="hidden sm:block ml-6 w-11 h-11 rounded-[10px] overflow-hidden">
      <img
        src="/img/profile-user.png"
        className="block w-full h-full object-cover"
      />
    </div>
  );
}
