import Expenses from "./components/Expenses";
import Test from "./components/Test";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "TV",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "Car2",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
  ];

  return (
    <>
      <div>
        <h2>Let's get started!</h2>
        <Expenses items={expenses} />
      </div>
      <div>
        <h2>Let's get started!</h2>
        <Expenses items={expenses} />
      </div>
      <Test />
    </>
  );
}

export default App;
