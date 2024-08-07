import React from 'react';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface RepoListProps {
  repos: Repository[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <div className="row mt-4">
      {repos.map(repo => (
        <div key={repo.id} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fw-bold">{repo.name}</h5>
              <p className="card-text">{repo.description}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Stars:</strong> {repo.stargazers_count}</li>
                <li className="list-group-item"><strong>Forks:</strong> {repo.forks_count}</li>
                <li className="list-group-item"><strong>Language:</strong> {repo.language}</li>
              </ul>
              <a href={repo.html_url} className="btn btn-danger mt-3 fw-bold" target="_blank"><i className="fa-brands fa-github fa-lg"></i> Visit Repository </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
