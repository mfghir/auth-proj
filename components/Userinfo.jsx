"use client";
import Image from "next/image";
import SigninBtn from "./SigninBtn";
import { useSession } from "next-auth/react";

const Userinfo = () => {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <Image src={session?.user?.image} alt="user" width={60} height={60} />
        <div>
          Name : <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Name : <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>
    );
  }

  return <SigninBtn />;
};

export default Userinfo;
