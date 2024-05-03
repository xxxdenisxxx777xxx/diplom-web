import React, { } from 'react';
import AppRouter from './routes/AppRouter';


function App() {


  return (
    <div className='flex flex-col min-h-screen'>
      <main className='w-full mx-auto flex-1 my-6 max-w-screen-xl px-2.5'>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;