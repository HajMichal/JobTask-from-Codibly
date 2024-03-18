import { TableOfColors } from "./components/TableOfColors";
import { NavigationButtons } from "./components/NavigationButtons";
import { FilterInput } from "./components/FilterInput";

function App() {
  return (
    <div className="flex flex-col items-center bg-[#E8E7E7] h-screen">
      <div className="flex flex-col items-center max-w-[600px]">
        <FilterInput />
        <TableOfColors />
        <NavigationButtons />
      </div>
    </div>
  );
}

export default App;
