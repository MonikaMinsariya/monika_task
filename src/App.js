import './App.css';
import Navbar from './Components/navbar';
import TableData from './Components/tableData';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer
        theme="dark"
        transition={Bounce} />
      <Navbar />
      <TableData />
    </div>
  );
}

export default App;
