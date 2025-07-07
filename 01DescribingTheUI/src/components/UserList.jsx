import React from "react";

function UserList() {
  const users = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "yash ",
    },
    {
      id: 3,
      name: "RAhul",
    },
  ];

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            name :{user.name} <t />
            UserID: {user.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
