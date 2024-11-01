import "./App.css";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { MantineProvider } from "@mantine/core";

import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <div className="container max-w-[1300px] mx-auto">
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <RouterProvider router={routes} />
          </MantineProvider>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
