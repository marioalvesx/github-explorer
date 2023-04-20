import "../styles/userSearch.scss";
import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

interface Search {
  loadUser: (userName: string) => Promise<void>;
}

const UserSearch = ({ loadUser }: Search) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      loadUser(userName);
    }
  };

  return (
    <form className="search-input-wrapper">
      <input
        className="user-name"
        type="text"
        placeholder="Find an user..."
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className="user-button"
        onClick={() => loadUser(userName)}
      >
        <BsSearch /> Search
      </button>
    </form>
  );
};

export default UserSearch;