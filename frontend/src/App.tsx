import { Container } from "typetailui";
import "./App.css";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <Container className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <AddStudent/>
      <StudentList />
    </Container>
  );
}

export default App;
