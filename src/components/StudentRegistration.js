export default function StudentRegistration() {
  return (
    <div className="student-registration mt-5 overflow-scroll">
      <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
        <span className="w-100 position-absolute top-0 start-0"></span>
        <span className="h-100 position-absolute top-0 end-0"></span>
        <span className="w-100 position-absolute bottom-0 end-0"></span>
        <span className="h-100 position-absolute bottom-0 start-0"></span>
        Student Registration
      </h2>
      <div className="inputs-data d-flex align-items-center gap-3">
        <div className="m-3">
          <label for="lectureName" className="form-label">
            Lecture Name
          </label>
          <input type="text" className="form-control" id="lectureName" />
        </div>
        <div className="m-3">
          <label for="centerName" className="form-label">
            Center Name
          </label>
          <input type="text" className="form-control" id="centerName" />
        </div>
        <div className="m-3">
          <label for="studentId" className="form-label">
            Student Id
          </label>
          <input type="text" className="form-control" id="studentId" />
        </div>
        <button className="btn outline-btn h-25">Add Student</button>
      </div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>mohab</td>
            <td>mohab.khaled@gmail.com</td>
            <td>
              <div className="d-flex gap-2">
                <button className="btn outline-btn">Show Profile</button>
                <button className="btn btn-danger">Remove</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>eslam</td>
            <td>eslam.mohamed@gmail.com</td>
            <td>
              <div className="d-flex gap-2">
                <button className="btn outline-btn">Show Profile</button>
                <button className="btn btn-danger">Remove</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>khaled</td>
            <td>khaled@gmail.com</td>
            <td>
              <div className="d-flex gap-2">
                <button className="btn outline-btn">Show Profile</button>
                <button className="btn btn-danger">Remove</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
