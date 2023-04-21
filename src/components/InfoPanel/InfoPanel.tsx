import React from 'react';
type Props = {
  username: string;
  repo: string;
};
const InfoPanel: React.FC<Props> = ({ username, repo }) => {
  return (
    <div>
      <a href={`https://github.com/${username}`}>{username}</a>
      <span>{' >'} </span>
      <a href={`https://github.com/${username}/${repo}`}>{repo}</a>
    </div>
  );
};

export default InfoPanel;
