import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      this page doesn't exist. Go <Link to="/garden/">home</Link>
    </div>
  );
}

export default NotFoundPage;