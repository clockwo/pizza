// import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  return (
    <>
      <Button appearance="large">Применить</Button>
      <Input placeholder="Email" />
      <Input placeholder="Пароль" />
    </>
  );
}

export default App;
