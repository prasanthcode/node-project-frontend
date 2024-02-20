import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <h1>Hello prasanth</h1>
      <UserProfile />
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          nisi, sapiente suscipit illum eligendi qui beatae consectetur
          similique eum. Nostrum dolorum quos officiis ipsam temporibus neque,
          blanditiis praesentium nihil odio!
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          nisi, sapiente suscipit illum eligendi qui beatae consectetur
          similique eum. Nostrum dolorum quos officiis ipsam temporibus neque,
          blanditiis praesentium nihil odio!
        </p>
      </div>
    </div>
  );
}

export default App;
