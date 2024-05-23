import React from "react";
import ManageBlogCard from "../components/ManageBlogCard";
import ProfileDetails from "../components/ProfileDetails";

const Profile = () => {
  const user = {
    name: "Mohammad Haolader",
    email: "mohammadhaolader",
  };

  return (
    <div className='min-h-screen '>
      <div className='container px-16 py-16'>
        {/* warper */}
        <div className='flex justify-between bg-slate-100 p-4'>
          {/* left manage  */}
          <div>
            <ManageBlogCard />
          </div>
          {/* right profile  */}
          <div>
            <ProfileDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
