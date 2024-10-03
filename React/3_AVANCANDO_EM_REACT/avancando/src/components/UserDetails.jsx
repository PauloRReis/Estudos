import React from "react";

const UserDetails = ({ persons }) => {
  return (
    <div>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.nome}, {person.profissao}
            {person.idade < 18 ? (
              <div>Não pode dirigir!!</div>
            ) : (
              <div>Pode dirigir!!</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
