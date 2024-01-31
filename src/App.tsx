import { useState } from 'react';
import './App.css';
import { Button, Modal } from './components';

function App() {
  const [ open, setOpen ] = useState(false)
  const closeModal = () => {
    setOpen(false)
  };

  return (
    <main>
      <Button onClick={() => setOpen(true)}>Show modal</Button>
      <Modal 
        open={open}
        header="Title"
        onClose={closeModal}
      >
        {Array(2).fill(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur delectus enim expedita ipsa illum? Tempora facilis vitae dolores aut molestiae voluptas numquam nobis repellendus accusantium laudantium, quisquam amet dolor?'
        ).map((text, i) => <p key={i}>{text}</p>)}
      </Modal>
    </main>
  );
}

export default App;
