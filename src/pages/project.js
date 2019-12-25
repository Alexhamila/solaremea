import React, { useEffect } from "react";
import DashboardMenu from "./../components/DashboardMenu";
import Project from "./../components/Project";
import { useAuth } from "./../util/auth.js";
import { useRouter } from "./../util/router.js";

function DashboardPage(props) {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/signin");
    }
  }, [auth, router]);

  return (
    <>
      <DashboardMenu isActive={{ project: true }} />
      <Project size="large" />
    </>
  );
}

export default DashboardPage;
