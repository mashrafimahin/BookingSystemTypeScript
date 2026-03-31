// Image
import bg from "./assets/bg.jpg";
// component
import Form from "./component/Form";
// main
function App() {
  return (
    <div
      className="px-4 md:px-20 py-6 w-full flex bg-cover bg-center bg-gray-300 bg-blend-multiply"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Form />
    </div>
  );
}

export default App;
