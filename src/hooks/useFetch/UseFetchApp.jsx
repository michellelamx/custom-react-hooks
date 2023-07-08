import useFetch from "./useFetch";

export default function UseFetchApp() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        data.map((user) => (
          <div key={user.id} className="user-card">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
          </div>
        ))
      )}
    </>
  );
}
