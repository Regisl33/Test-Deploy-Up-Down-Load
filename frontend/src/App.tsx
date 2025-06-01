import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./features/files/components/Upload";
import Download from "./features/files/components/Download";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
