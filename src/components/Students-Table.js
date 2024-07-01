export default function StudentsTable() {
  return (
    <>
      <div className="Student-statistics overflow-scroll mt-3">
        <h2 style={{ color: "var(--main-color)" }}>Student statistics</h2>
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
              <th scope="col">lectures</th>
              <th scope="col">homeworks</th>
              <th scope="col">exmas</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>mohab</td>
              <td>18/20</td>
              <td>13/15</td>
              <td>5/5</td>
              <td>
                <button className="btn btn-outline-primary outline-btn">
                  show full data
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>khaled</td>
              <td>13/20</td>
              <td>11/15</td>
              <td>3/5</td>
              <td>
                <button className="btn btn-outline-primary outline-btn">
                  show full data
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>mohamed</td>
              <td>20/20</td>
              <td>10/15</td>
              <td>4/5</td>
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
