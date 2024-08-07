import React, { useState } from 'react';

interface SearchRepoProps {
  onSearch: (username: string) => void;
}

const SearchRepo: React.FC<SearchRepoProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-inline justify-content-center">
        <input
          type="text"
          className="form-control fw-bold mx-sm-3 mb-2"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary mb-2 fw-bold">Search</button>
      </form>
    </div>
  );
};

export default SearchRepo;
