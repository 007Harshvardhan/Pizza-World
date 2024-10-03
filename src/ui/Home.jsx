import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-grow my-10 px-4 text-center sm:my-16">
        <h1 className="mb-8 text-xl font-semibold md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        {username === '' ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        )}
      </div>

      {/* Footer at the bottom */}
      <footer className="text-center py-4 text-sm text-stone-500">
        &copy; 2024 Harsh Vardhan
      </footer>
    </div>
  );
}

export default Home;
