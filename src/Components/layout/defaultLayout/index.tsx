import { Outlet } from "react-router-dom";
import { Header } from "../../Header/index.tsx";
import { LayoutContainer } from "./styles.ts";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
