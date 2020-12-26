import React from 'react';

const RepoItem = ({ repo }) =>{
  return (
    <div>
      <div>
        <h3>
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
      </div>
    </div>
  );
}

export default RepoItem;
