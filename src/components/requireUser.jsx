import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const RequireUser = () => {
  const [cookies] = useCookies(["logged_in"]);
  const location = useLocation();
};
