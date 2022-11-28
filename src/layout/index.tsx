import {Outlet} from "react-router";
import {Stack} from "@mui/material";
import Header from "./Header";

export default function Layout() {

  return (
    <Stack sx={{minHeight: 1}}>
      <Header />

      <Outlet/>

    </Stack>
  );
}