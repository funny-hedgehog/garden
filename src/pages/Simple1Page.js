import {useLocation} from "react-router";

function Simple1Page() {
  const location = useLocation()
  console.log('location', location)

  return (
    <div>
      <h1>Simple1Page</h1>
    </div>
  );
}

export default Simple1Page;