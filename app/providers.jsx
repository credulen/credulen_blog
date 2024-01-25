
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
export default function Providers({ children, session }) {
  return (
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={!true} />
      </QueryClientProvider>

  );
}
