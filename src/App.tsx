import { useState } from 'react';
import { fetchNui } from './utils/fetchNui';
import { useNuiEvent } from './utils/useNuiEvent';
import { debugData } from './utils/debugData';

debugData([
  {
    action: 'setVisible',
    data: true,
  },
]);

function App() {
  const [visible, setVisible] = useState(false);

  useNuiEvent<boolean>('setVisible', (data) => {
    setVisible(data);
  });

  const handleClose = () => {
    setVisible(false);
    fetchNui('hideFrame');
  };

  useNuiEvent('closeKey', () => {
    handleClose();
  });

  if (!visible) return null;

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      
      <div className="w-[500px] overflow-hidden rounded-lg bg-gray-900/70 shadow-2xl backdrop-blur-md text-white">
        
        <div className="relative bg-gray-600/50 p-6 text-center">
          <h1 className="text-3xl font-bold">
            Hello World
          </h1>
          <p>Template by lofuzi</p>
        </div>


      </div>
    </div>
  );
}

export default App;