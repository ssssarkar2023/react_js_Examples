// export function App() {
//   return "Hello React";
// }
// import { Heading, SubHeading } from "./Heading";
// import AdditionHeading from "./Addition";
// import Subtraction from "./Subtraction";
// import Multiplication from "./Multiplication";

import FirstHeading from "./Headings";
import SecondHeading from "./Headings2";
import FavFoodList from "./List1";
import SystemAcc from "./List2";
function App() {
  // let x = 25;
  // let y = 15;
  return (
    <div>
      {/* <Heading />
      <SubHeading />
      <AdditionHeading />
      <Subtraction />
      <Multiplication/> */}
      <FirstHeading />
      <FavFoodList />
      <SecondHeading />
      <SystemAcc />
    </div>
  );
}



// const AdditionHeading = () => {
//   return (
//     <div>
//       <h2>Addition</h2>
//     </div>
//   )
// }

// const SubtrationHeading = () => {
//   return (
//     <div>
//       <h2>Subtration</h2>
//     </div>
//   )
// }

// const MultiplicationHeading = () => {
//   return (
//     <div>
//       <h2>Multiplication</h2>
//     </div>
//   )
// }

export default App;