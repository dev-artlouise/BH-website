import { Outlet } from "react-router-dom";
import AppbarComponent from "./layouts/AppbarComponent";
import Navbar from "./components/Navbar";
import Footer from "./layouts/Footer";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppbarComponent />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
