import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchRepo from './components/SearchRepo';
import RepoList from './components/RepoList';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const App: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username: string) => {
    if (!username.trim()) {
      toast.error('Username is required');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) throw new Error('No matching user found');
      const data: Repository[] = await response.json();
      if (data.length === 0) {
        throw new Error('No repositories found for this user');
      }
      setRepos(data);
      toast.success('User found successfully!');
    } catch (err: any) {
      toast.error(err.message || 'An error occurred');
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="text-center my-4 title">GitHub Repository</h1>
      <SearchRepo onSearch={handleSearch} />
      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" />
        </div>
      ) : (
        <RepoList repos={repos} />
      )}
    </div>
  );
};

export default App;
