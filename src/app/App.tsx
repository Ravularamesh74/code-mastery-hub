import { Providers } from "./providers";
import AppRouter from "@/router/AppRouter";

const App = () => (
  <Providers>
    <AppRouter />
  </Providers>
);

export default App;
