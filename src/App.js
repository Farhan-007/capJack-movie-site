import { Route, Routes, HashRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import FilterPage from "./Pages/filterPage";
import HomePage from "./Pages/homePage";
import LandingPage from "./Pages/landingPage";
import SinglePage from "./Pages/singlePage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          
          <Route path="/"
            element={<LandingPage />}
          />

          <Route path="/home"
            element={<CommonContainer>
              <HomePage />
            </CommonContainer>}
          />

          <Route path="/watch"
            element={<CommonContainer>
              <SinglePage />
            </CommonContainer>}
          />

          <Route path="/filter"
            element={<CommonContainer>
              <FilterPage />
            </CommonContainer>}
          />


        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
