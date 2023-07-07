import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import styled from "styled-components";
import { Home } from './Home/Home';
import { ExercisePage } from './ExercisePage/ExercisePage';


const AppContainer = styled.div`
  direction: rtl;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f5ff;
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/exercise/:id" element = {<ExercisePage />}/>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
