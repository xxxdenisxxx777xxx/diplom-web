import React, { } from 'react';
import AppRouter from './routes/AppRouter';


function App() {


  return (
    <div className='flex flex-col min-h-screen'>
      <main className='w-full mx-auto '>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;