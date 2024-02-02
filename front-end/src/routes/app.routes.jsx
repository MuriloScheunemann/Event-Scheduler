import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home';
import { CreateEvent } from '../pages/CreateEvent';


export function AppRoutes() {

  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/new"  element={<CreateEvent />} />
    </Routes>
  );
}
