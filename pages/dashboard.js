import { getSession } from "next-auth/react";


function Dashboard() {
 


  return (
    <div>Dashboard</div>
  )}

export default Dashboard;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req: req });
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
