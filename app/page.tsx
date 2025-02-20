import Sidenav from "./_component/side_nav";
import Home from "./main page/home";

export default function Main() {
  return (
    <div className="flex">
      <Sidenav />
      <Home />
    </div>
  );
}
