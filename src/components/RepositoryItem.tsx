interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <h1>{props.repository.name ?? "Default"}</h1>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Access repository</a>
    </li>
  );
}
