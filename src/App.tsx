import React, { useState } from 'react'
import List from './list';
import TempData from './data/exampleData.json';

const App: React.FunctionComponent = () => {
  
  const [data, setData] = useState<Array<any>>([]);

  const storeDataAsArrayOfObjects=()=>
  {
    setData(TempData);
  }

  return(
    <div>
      <button  onClick={storeDataAsArrayOfObjects}>Load Default Data</button>
      {data.length !=0? <List data={data} /> :<></>}
    </div>
  );

};

export default App;