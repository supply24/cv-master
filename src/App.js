
import './App.css';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <main>
        <div className="content">



          <Outlet />





        </div>



      </main>


    </div>
  );
}

export default App;
