import {useLocation} from "react-router";

function Simple2Page() {
  const location = useLocation()
  console.log('location', location)
  console.log('window', window.location)

  return (
    <div>
      <h1>Simple2Page</h1>
    </div>
  );
}

export default Simple2Page;