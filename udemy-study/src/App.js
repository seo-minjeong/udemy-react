// import componentsImage from "./assets/images/components.png";
// import stateImage from "./assets/images/state.png";
// import eventsImage from "./assets/images/events.png";

// import Header from "./components/Concepts/Header";
// import Concept from "./components/Concepts/Concept";

// const concepts = [
//   {
//     title: "Components",
//     image: componentsImage,
//     description:
//       "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
//   },
//   {
//     title: "State",
//     image: stateImage,
//     description:
//       "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
//   },
//   {
//     title: "Events",
//     image: eventsImage,
//     description:
//       "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
//   },
// ];

// function App() {
//   return (
//     <div>
//       <Header />
//       <ul id="concepts">
//         <Concept
//           image={concepts[0].image}
//           title={concepts[0].title}
//           description={concepts[0].description}
//         />
//         <Concept
//           image={concepts[1].image}
//           title={concepts[1].title}
//           description={concepts[1].description}
//         />
//         <Concept
//           image={concepts[2].image}
//           title={concepts[2].title}
//           description={concepts[2].description}
//         />
//       </ul>
//     </div>
//   );
// }

// export default App;

import Expenses from "./components/Expense/Expenses";

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
    </>
  );
}

export default App;
