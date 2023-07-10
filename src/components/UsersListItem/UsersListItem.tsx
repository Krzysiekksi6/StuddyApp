import { User } from "../../types/User";

interface UsersListItemProps {
  userData: User;
}

const UsersListItem = ({
  userData: { name, average, attendance },
}: UsersListItemProps) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

export default UsersListItem;
