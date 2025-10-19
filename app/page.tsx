'use client'
import Image from "next/image";
import { signIn , signOut, useSession } from "next-auth/react";
export default function Home() {
    const {data:session ,status} = useSession()
  if (!session) {
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    )
  }
  return (
   <div>
    <button onClick={()=>{
      signIn("google")
    }}>SIgnin</button>
    <br />
    <button onClick={()=>{
      signOut()
    }}>Signout</button>
<div>
  <h1>{session.user?.name}</h1>
  <h1>{session.user?.email}</h1>
  <h1>{session.user?.image}</h1>
</div>
   </div>
  );
}
