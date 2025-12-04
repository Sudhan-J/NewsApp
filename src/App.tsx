import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";


const HomeFeed = lazy(() => import("./Pages/HomeFeed"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const MainLayout = lazy(() => import("./Pages/MainLayout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <HomeFeed />
          </Suspense>
        )
      }
    ],
    errorElement:(
      <Suspense>
        <PageNotFound />
      </Suspense>
    )
  }
]
);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
