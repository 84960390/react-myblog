import {renderRoutes} from 'react-router-config';
import routes from './router/index.js'
function App() {

  return (
      <div className='entry'>
        {renderRoutes(routes)}
      </div>

  )
}

export default App;
