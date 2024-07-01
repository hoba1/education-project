export default function AdminActionsTable() {
  return (
    <>
      <div className="Student statistics mt-3">
        <h2 style={{ color: "var(--main-color)" }}>Admin Actions</h2>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control w-100"
            id="floatingInput"
          />
          <label for="floatingInput">Search</label>
        </div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">action</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>ahmed</td>
              <td>upload lecture 1</td>
              <td>
                <button className="btn btn-outline-primary outline-btn">
                  show full data
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>eslam</td>
              <td>upload homework 1</td>
              <td>
                <button className="btn btn-outline-primary outline-btn">
                  show full data
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>nada</td>
              <td>upload exam 1</td>
              <td>
                <button className="btn btn-outline-primary outline-btn">
                  show full data
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
