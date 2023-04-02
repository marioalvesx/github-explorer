import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useEffect, useState } from "react";

// https://api.github.com/users/marioalvesx/repos

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: "https://github.com/unform/unform"
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/marioalvesx/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}