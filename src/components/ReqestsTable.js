export default function ReqestsTable() {
  return (
    <>
      <div className="Requests mt-5 overflow-scroll">
        <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
          <span className="w-100 position-absolute top-0 start-0"></span>
          <span className="h-100 position-absolute top-0 end-0"></span>
          <span className="w-100 position-absolute bottom-0 end-0"></span>
          <span className="h-100 position-absolute bottom-0 start-0"></span>
          Requests
        </h2>
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
              <th scope="col">email</th>
              <th scope="col">role</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>mohab</td>
              <td>mohab.khaled@gmail.com</td>
              <td>student</td>
              <td>
                <div className="d-flex gap-2">
                <button className="btn btn-success">
                  accept
                </button>
                <button className="btn btn-danger">
                  refuse
                </button>
                </div>
              </td>
            </tr>
            <tr>
            <th scope="row">2</th>
              <td>eslam</td>
              <td>eslam.mohamed@gmail.com</td>
              <td>admin</td>
              <td>
                <div className="d-flex gap-2">
                <button className="btn btn-success">
                  accept
                </button>
                <button className="btn btn-danger">
                  refuse
                </button>
                </div>
              </td>
            </tr>
            <tr>
            <th scope="row">1</th>
              <td>khaled</td>
              <td>khaled@gmail.com</td>
              <td>parent</td>
              <td>
                <div className="d-flex gap-2">
                <button className="btn btn-success">
                  accept
                </button>
                <button className="btn btn-danger">
                  refuse
                </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
