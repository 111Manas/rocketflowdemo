import CustomSearchBar from "../../../custom-search/custom-search";
import DashboardLayout from "../../../layouts/dashboard-layout";
import "./detax.scss";

const DashboardDetax = () => {
  return (
    <DashboardLayout>
      <h1 className="page-heading"> De'tax</h1>
      <div className="card">
        <CustomSearchBar />
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <button className="btn card">
              423
              <br />
              All
            </button>
          </div>
          <div className="col">
            <button className="btn card">
              23
              <br />
              Enrolment Pending
            </button>
          </div>
          <div className="col">
            <button className="btn card">
              11
              <br />
              Activation Pending
            </button>
          </div>
          <div className="col">
            <button className="btn card">
              1,121
              <br />
              Activated{" "}
            </button>
          </div>
          <div className="col">
            <button className="btn card">
              102
              <br />
              Deactivated{" "}
            </button>
          </div>
          <div className="col">
            <button className="btn card">
              17
              <br />
              Canceled
            </button>
          </div>
        </div>
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th scope="col">Employee Code</th>
            <th scope="col">Date</th>
            <th scope="col">Employee Name</th>

            <th scope="col">Mobile</th>
            <th scope="col">E-mail</th>
            <th scope="col">Salary</th>
            <th scope="col">Flexi Allowance</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DET001</td>
            <td>17-09-2021</td>
            <td>Aman Khurana</td>
            <td>+91 9976543210</td>
            <td>john@smith.com</td>
            <td>73,129</td>
            <td>13,129</td>
            <td>
              <button className="btn btn-light text-primary">
                {" "}
                Enrolment Pending
              </button>
            </td>
          </tr>
          <tr>
            <td>DET001</td>
            <td>17-09-2021</td>
            <td>Aman Khurana</td>
            <td>+91 9976543210</td>
            <td>john@smith.com</td>
            <td>73,129</td>
            <td>13,129</td>

            <td>
              <button className="btn btn-light text-warning">
                {" "}
                Activation Pending
              </button>
            </td>
          </tr>
          <tr>
            <td>DET001</td>
            <td>17-09-2021</td>
            <td>Aman Khurana</td>
            <td>+91 9976543210</td>
            <td>john@smith.com</td>
            <td>73,129</td>
            <td>13,129</td>

            <td>
              <button className="btn btn-light text-success"> Activeted</button>
            </td>
          </tr>
          <tr>
            <td>DET001</td>
            <td>17-09-2021</td>
            <td>Aman Khurana</td>
            <td>+91 9976543210</td>
            <td>john@smith.com</td>
            <td>73,129</td>
            <td>13,129</td>

            <td>
              <button className="btn btn-light text-secondary">
                {" "}
                Deactivated
              </button>
            </td>
          </tr>
          <tr>
            <td>DET001</td>
            <td>17-09-2021</td>
            <td>Aman Khurana</td>
            <td>+91 9976543210</td>
            <td>john@smith.com</td>
            <td>73,129</td>
            <td>13,129</td>

            <td>
              <button className="btn btn-light text-danger"> Canceled</button>
            </td>
          </tr>
          <tr>
            <td>DET001</td>
            <td>17-09-2021</td>
            <td>Aman Khurana</td>
            <td>+91 9976543210</td>
            <td>john@smith.com</td>
            <td>73,129</td>
            <td>13,129</td>
            <td>
              <button className="btn btn-light text-primary">
                {" "}
                Enrolment Pending
              </button>
            </td>
          </tr>
          <tr>
            <td>DET001</td>
            <td>17-09-2021</td>
            <td>Aman Khurana</td>
            <td>+91 9976543210</td>
            <td>john@smith.com</td>
            <td>73,129</td>
            <td>13,129</td>

            <td>
              <button className="btn btn-light text-warning">
                {" "}
                Activation Pending
              </button>
            </td>
          </tr>
          <tr>
            <td>DET001</td>
            <td>17-09-2021</td>
            <td>Aman Khurana</td>
            <td>+91 9976543210</td>
            <td>john@smith.com</td>
            <td>73,129</td>
            <td>13,129</td>

            <td>
              <button className="btn btn-light text-success"> Activeted</button>
            </td>
          </tr>
          <tr>
            <td>DET001</td>
            <td>17-09-2021</td>
            <td>Aman Khurana</td>
            <td>+91 9976543210</td>
            <td>john@smith.com</td>
            <td>73,129</td>
            <td>13,129</td>

            <td>
              <button className="btn btn-light text-secondary">
                {" "}
                Deactivated
              </button>
            </td>
          </tr>
          <tr>
            <td>DET001</td>
            <td>17-09-2021</td>
            <td>Aman Khurana</td>
            <td>+91 9976543210</td>
            <td>john@smith.com</td>
            <td>73,129</td>
            <td>13,129</td>

            <td>
              <button className="btn btn-light text-danger"> Canceled</button>
            </td>
          </tr>
        </tbody>
      </table>
    </DashboardLayout>
  );
};
export default DashboardDetax;
