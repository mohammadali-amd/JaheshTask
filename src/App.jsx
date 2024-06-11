import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

const App = () => {

  return (
    <div className="flex flex-col h-screen">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
