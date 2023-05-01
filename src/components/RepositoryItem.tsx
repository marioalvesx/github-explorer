interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    owner: {
      login: string;
      avatar_url: string;
    };
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <>
      <li>
        <img
          src={props.repository.owner.avatar_url}
          className="imgUser"
          alt={props.repository.owner.login}
        />

        <div className="repository-details">
          <h1>{props.repository.name ?? "Default"}</h1>
          <p>{props.repository.description}</p>
          <a href={props.repository.html_url}>Access repository</a>
        </div>
      </li>
    </>
  );
}
