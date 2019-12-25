import React, { useEffect } from "react";
import Dashboard from "./../components/Dashboard";
import DashboardMenu from "./../components/DashboardMenu";
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
      <DashboardMenu isActive={{ dashboard: true }} />
      <Dashboard
        color="white"
        size="large"
        chartData={{
          labels: ["Poggiofiorito #A9F3", "Sicily #EA21"],
          datasets: [
            {
              label: "KWatts/Day",
              data: [1.2, 1.5, 2],
              backgroundColor: [
                "rgba(75, 192, 192, 0.6)",
                "rgba(54, 162, 235, 0.6)"
              ]
            }
          ]
        }}
        lineData={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
          ],
          datasets: [
            {
              label: "Average KWatts/Day for each Month in Poggiofiorito #A9F3",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75, 192, 192, 0.8)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [0.7, 0.9, 0.96, 1, 1.04, 1.1, 1.2]
            }
          ]
        }}
      />
    </>
  );
}

export default DashboardPage;
