import React, { useEffect } from 'react';
import connectToMongoDB from './mongoconnection';

function App() {
  useEffect(() => {

    connectToMongoDB()
      .then(db => {

      })
      .catch(error => {
        console.log('Erreur de connexion à MongoDB depuis React:', error);
      });
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
