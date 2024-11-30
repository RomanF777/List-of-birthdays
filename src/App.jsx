import { useState } from 'react';
import data from './data.js'
import List from './List';
const App = () => {
    const [ people, setPeople ] = useState(data);
  const clearAll = () => {
    setPeople([]);
  }

  return (
      <main>
          <section className='container'>
              <h3>{people.length} birthdays today</h3>
              {people.length > 0 ? (
                  <List people={people} />
              ) : (
                  <p>No more birthdays!</p>
              )}
              <button className='btn btn-block' type='button' onClick={clearAll}>
                  Clear All
              </button>
          </section>
      </main>
  );
};
export default App;
