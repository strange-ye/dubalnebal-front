import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ResetStyle from "./styles/reset";
import { Provider } from "react-redux";
import { store } from "./components/Youtube/store/actions"; // Redux 스토어를 가져온다.
import "../src/fonts/Kimjungchul_Font/kimjungchul.css";
import "../src/fonts/omu.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ResetStyle />
      {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      {/* </QueryClientProvider> */}
    </Provider>
  </React.StrictMode>
);
