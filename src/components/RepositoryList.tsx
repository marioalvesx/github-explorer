import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";
import githubBackground from "../assets/background.png";
import logo from "../assets/logo.svg";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [username, setUsername] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("Waiting search");

  useEffect(() => {
    if (username.length > 0) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setDescription(username && "User not found");
          setRepositories(data);
        });
    }
  }, [url]);

  return (
    <section
      className="repository-list"
      style={{ backgroundImage: `url(${githubBackground})` }}
    >
      <div className="header">
        <img src={logo} alt="logo" />
      </div>

      <h1 className="title">Explore Github Users</h1>
      <div className="search-input-wrapper">
        <input
          className="user-name"
          type="text"
          name="user"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Find a user..."
        ></input>
        <button
          type="submit"
          onClick={() => {
            setUrl("https://api.github.com/users/" + username + "/repos");
          }}
          className="user-button"
        >
          <BsSearch /> Search
        </button>
      </div>

      <div className="repositories-wrapper">
        <ul>
          {repositories.length > 0 ? (
            repositories.map((repository) => (
              <RepositoryItem key={repository.name} repository={repository} />
            ))
          ) : (
            <h2>{description}</h2>
          )}
        </ul>
      </div>
    </section>
  );
}
