// layouts
import Layout from "./layouts";
import { BackToTop } from "material-ui-back-to-top"

function App() {
  return (
    <div>
      <BackToTop color="secondary" buttonShowDuration="10000" />
      <Layout />
    </div>
  );
}

export default App;
