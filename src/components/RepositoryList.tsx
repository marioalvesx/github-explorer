import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import githubLogo from '../assets/githubwhite.png';
import { useEffect, useState } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/marioalvesx/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <div className="header">      
        <h1>Github Explorer</h1>
        <img className="app-logo" src={githubLogo} alt="logo" />
      </div>

      <div className="search-button">
        <label htmlFor="">Search user</label>
        <input title="user" type="text" placeholder="Find a user..."></input>
      </div>

      <hr />
      
      <div className="repositories-wrapper">
        <h2>Repository list from user __ :</h2>
        <ul>
          {repositories.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository} />
          })}
          
        </ul>
      </div>
    </section>
  )
}