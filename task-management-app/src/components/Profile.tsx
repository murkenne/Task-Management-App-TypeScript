import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Get access token to call Auth0's userinfo API
        const token = await getAccessTokenSilently();

        // Call the Auth0 userinfo endpoint
        const response = await fetch("https://dev-olxneqlayr1tp8li.us.auth0.com/userinfo", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (isAuthenticated) {
      fetchUserInfo();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>User Profile</h2>
        {userData ? (
          <div>
            <img src={userData.picture} alt={userData.name} />
            <h3>{userData.name}</h3>
            <p>{userData.email}</p>
          </div>
        ) : (
          <div>
            <p>Failed to load user data. Please try again later.</p>
          </div>
        )}
      </div>
    )
  );
};

export default Profile;
