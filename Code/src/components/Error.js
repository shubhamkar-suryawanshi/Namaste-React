import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h1>Someting went wrong</h1>
      <h3>
        Status = {err.status} - {err.data}
      </h3>
    </div>
  );
};

export default Error;
