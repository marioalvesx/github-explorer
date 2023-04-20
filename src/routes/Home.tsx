import { useState } from "react";
import UserSearch from "../components/UserSearch";
import UserData from "../components/User";

import githubBackground from "../assets/background.png";
import { User } from "../interfaces/user";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  const loadUser = async (userName: String) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    const {
      login,
      avatar_url,
      location,
      followers,
      following,
      repositoryNumber,
    } = data;
    const userData: User = {
      login,
      avatar_url,
      location,
      followers,
      following,
      repositoryNumber,
    };
    setUser(userData);
    console.log("userdata: " + userData);
    console.log("OLAAA");
  };

  return (
    <div
      className="home-wrapper"
      style={{ backgroundImage: `url(${githubBackground})` }}
    >
      <section>
        <h1 className="title">Explore Github Users</h1>
        <UserSearch loadUser={loadUser} />
        {user && <p>{user.login}</p>}
      </section>
    </div>
  );
};

export default Home;
