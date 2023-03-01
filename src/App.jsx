import routes from './routes'; 
import { useRoutes } from 'react-router-dom';

function App() {

  //const userId = useSelector((state) => state.auth.userId);
  const showRoutes = useRoutes(routes);
  return (
    <>
      {showRoutes}
    </>
  )
}

export default App
