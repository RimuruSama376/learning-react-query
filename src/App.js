import './App.css';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './api/api';
import PostList from './components/PostList';

function App() {
  const { data, isLoading: isDataLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts

  })
  console.log(data, isDataLoading);

  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
