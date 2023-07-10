import { users } from "../../data/users.js";
import UsersListItem from "../UsersListItem/UsersListItem.js";

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
