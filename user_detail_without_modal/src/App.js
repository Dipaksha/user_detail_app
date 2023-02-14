import './App.css';
import { Container } from '@mui/material';
import UserInfo from './components/user_info_page';

function App() {
  return (
    <Container maxWidth="sm">
        <h1 style={{ textAlign: "center" }}>User Details</h1>
        <UserInfo/>
    </Container>
  );
}

export default App;
