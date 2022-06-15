import React from "react";
import {
  employeesData,
  employeesGrid,
  GridEmployeeProfile,
  GridEmployeeCountry,
} from "../data/dummy";
import GridModal from "../components/modal";
import { TextField } from "@material-ui/core";
import Header from "../components/Header";
import { useStateContext } from "../context/context";
const Employees: React.FC = () => {
  const { currentPage, setCurrentPage, postperPage } = useStateContext();
  const indexOflastemployee = currentPage * postperPage;
  const indexOfFirstemployee = indexOflastemployee - postperPage;
  const currentEmployees = employeesData.slice(
    indexOfFirstemployee,
    indexOflastemployee
  );
  return (
    <>
      <Header bigtext="Employees" smallText="Page" />
      <div
        className="employees"
        style={{
          margin: "2rem 3rem",
          height: "85vh",
          overflowY: "scroll",
        }}
      >
        <div className="employeesGrid">
          <div
            className="employee_input"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <TextField
              variant="standard"
              color="secondary"
              style={{ width: "50%" }}
              placeholder="Name of Employee"
            />
          </div>
          <div className="grid_headers">
            {employeesGrid.map(({ width, headerText }) => (
              <div className="header" style={{ width, textAlign: "center" }}>
                {headerText}
              </div>
            ))}
          </div>
          {currentEmployees.map((item) => {
            return (
              <div className="employee_container">
                <div
                  style={{ width: employeesGrid[0].width }}
                  className="employee_image"
                >
                  {
                    <GridEmployeeProfile
                      employeeImage={item.EmployeeImage}
                      name={item.Name}
                    />
                  }
                </div>
                <div
                  style={{ width: employeesGrid[1].width }}
                  className="employee_des"
                >
                  {item.Title}
                </div>
                <div
                  style={{ width: employeesGrid[2].width }}
                  className="employee_customer_name"
                >
                  {<GridEmployeeCountry country={item.Country} />}
                </div>
                <div
                  style={{ width: employeesGrid[3].width }}
                  className="employee_totalAmount"
                >
                  {item.HireDate}
                </div>

                <div
                  style={{ width: employeesGrid[4].width }}
                  className="employee_id"
                >
                  {item.ReportsTo}
                </div>
                <div
                  style={{ width: employeesGrid[5].width }}
                  className="employee_location"
                >
                  {item.EmployeeID}
                </div>
              </div>
            );
          })}
          {
            <GridModal
              currentPage={currentPage}
              postperPage={postperPage}
              setCurrentPage={setCurrentPage}
              data={employeesData}
            />
          }
        </div>
      </div>
    </>
  );
};

export default Employees;
