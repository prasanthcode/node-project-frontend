import { useAuth0 } from "@auth0/auth0-react";

function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <img src={user.picture} />
      </div>
    )
  );
}
export default UserProfile;
