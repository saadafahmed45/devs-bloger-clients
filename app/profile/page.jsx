import React from "react";
import ManageBlogCard from "../components/ManageBlogCard";
import ProfileDetails from "../components/ProfileDetails";

const Profile = () => {
  const user = {
    name: "Mohammad Haolader",
    email: "mohammadhaolader",
  };

  return (
    <div className=' '>
      <div className='container px-16'>
        {/* warper */}
        <div className=' '>
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
