import React, { useState } from 'react';

const Survey: React.FC = () => {
  const [votes, setVotes] = useState<{ [key: string]: number }>({
    Glen: 0,
    Carl: 0,
    Sasha: 0,
    Hershell: 0,
  });

  const [selectedCharacter, setSelectedCharacter] = useState<string>('');

  const handleVote = (name: string) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [name]: prevVotes[name] + 1,
    }));
    setSelectedCharacter(name);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Votes</th>
        </tr>
      </thead>
      <tbody>
        <tr className={selectedCharacter === 'Glen' ? 'active' : ''}>
          <th scope="row"></th>
          <td onClick={() => handleVote('Glen')}>Glen</td>
          <td>{votes['Glen']}</td>
        </tr>
        <tr className={selectedCharacter === 'Carl' ? 'active' : ''}>
          <th scope="row"></th>
          <td onClick={() => handleVote('Carl')}>Carl</td>
          <td>{votes['Carl']}</td>
        </tr>
        <tr className={selectedCharacter === 'Sasha' ? 'active' : ''}>
          <th scope="row"></th>
          <td onClick={() => handleVote('Sasha')}>Sasha</td>
          <td>{votes['Sasha']}</td>
        </tr>
        <tr className={selectedCharacter === 'Hershell' ? 'active' : ''}>
          <th scope="row"></th>
          <td onClick={() => handleVote('Hershell')}>Hershell</td>
          <td>{votes['Hershell']}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Survey;

