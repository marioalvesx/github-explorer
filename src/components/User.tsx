import { User } from "../interfaces/user";
import { Link } from "react-router-dom";

const UserProps = ({
  login,
  avatar_url,
  location,
  followers,
  following,
  repositoryNumber,
}: User) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <p>
        <span>{location}</span>
      </p>
      <div>
        <div>
          <p>Followers:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p>{following}</p>
        </div>
        <div>
          <p>Repository number:</p>
          <p>{repositoryNumber}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>See repositories:</Link>
    </div>
  );
};

export default UserProps;
