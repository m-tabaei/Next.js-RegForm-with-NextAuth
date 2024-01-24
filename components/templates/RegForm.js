import { useSession } from "next-auth/react";
import  Link  from 'next/link';

function RegForm() {
  const { status } = useSession();
  
  return (
    <div >
    {status === "unauthenticated" ? (
      <>
        <button>
          <Link href="/signin">Register/Login</Link>
        </button>
      </>
    ) : null}
      <h1>RegForm</h1>
   
    </div>
  );
};


export default RegForm;
