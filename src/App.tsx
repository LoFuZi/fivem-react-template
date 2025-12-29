import { useState } from 'react';
import { fetchNui } from './utils/fetchNui';
import { useNuiEvent } from './utils/useNuiEvent';
import { debugData } from './utils/debugData';

import { Button } from './components/ui/button';

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
      
      <Button variant="outline">Prendre son service</Button>
    </div>
  );
}

export default App;