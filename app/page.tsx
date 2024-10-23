import React from "react";
import Card from "./(components)/Card";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div className="p-5">
      <div className="md:grid-cols-2 lg:grid grid-cols-1 xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
