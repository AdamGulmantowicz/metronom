import NavBar from "./navbar";
import Metronom from "./metronom";

function App() {
  return `
    <div class="dragbar"></div>
    ${Metronom()}
    <input class="tempo-input" data-bind="value: tempo" />
    ${NavBar()}    
  `;
}

export default App;
