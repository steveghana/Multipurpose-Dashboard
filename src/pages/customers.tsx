import React from "react";
import Header from "../components/Header";
import { Checkbox } from "@material-ui/core";
import {
  customersData,
  customersGrid,
  CustomerGridImage,
  CustomerGridStatus,
} from "../data/dummy";
import GridModal from "../components/modal";
import { useStateContext } from "../context/context";
// interface
const Customers: React.FC = () => {
  const checkboxRef = React.useRef<HTMLDivElement>(null);
  const { currentPage, postperPage, setCurrentPage } = useStateContext();
  const [isChecked, setisChecked] = React.useState(false);
  const [customercheck, setcustomercheck] = React.useState({
    check: false,
    number: 0,
  });
  const [finalcheck, setFinalcheck] = React.useState(true);
  const indexOfLastCustomer = currentPage * postperPage;
  const allChecked = () => {
    if (checkboxRef.current === null) return;
    const element = checkboxRef?.current?.querySelectorAll<any>("input");
    element.forEach((el) => {
      if (!isChecked) {
        el.checked = true;
        setisChecked(true);
      } else {
        setisChecked(false);
      }
    });
  };
  const customerChecked = (i: number) => {
    setcustomercheck({ check: true, number: i });
  };

  const indexOfFirstCustomer = indexOfLastCustomer - postperPage;
  const customers = customersData.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  return (
    <div className="customers_container">
      <div
        style={{
          margin: "2rem 3rem",
          height: "85vh",
          overflowY: "scroll",
        }}
      >
        <Header bigtext="Customers" smallText="Page" />
        <div ref={checkboxRef} className="customer_list-box">
          <div className="customer_gridheaders">
            {customersGrid.map(
              ({ headerText, textAlign, width, type }, index) => (
                <div
                  key={index}
                  className="customer_header"
                  style={{ width, textAlign: "center" }}
                >
                  {type === "checkbox" ? (
                    <Checkbox onClick={allChecked} />
                  ) : (
                    headerText
                  )}
                </div>
              )
            )}
          </div>
          {customers.map((info, index) => {
            return (
              <div key={index} className="customerGrid_container">
                <div
                  className="order_image"
                  style={{ width: customersGrid[0].width }}
                >
                  {
                    <Checkbox
                      className="checkbox"
                      onClick={({ target }) => customerChecked(index)}
                      checked={
                        isChecked === true && index === customercheck.number
                          ? false
                          : isChecked && true
                      }
                    />
                  }
                </div>

                <CustomerGridImage
                  CustomerEmail={info.CustomerEmail}
                  CustomerImage={info.CustomerImage}
                  CustomerName={info.CustomerName}
                />
                <div
                  className="order_customer_name"
                  style={{ width: customersGrid[2].width }}
                >
                  {info.ProjectName}
                </div>
                <CustomerGridStatus
                  Status={info.Status}
                  StatusBg={info.StatusBg}
                />
                <div
                  className="order_status"
                  style={{ width: customersGrid[4].width }}
                >
                  {info.Weeks}
                </div>
                <div
                  className="order_id"
                  style={{ width: customersGrid[5].width }}
                >
                  {info.Budget}
                </div>
                <div
                  className="order_location"
                  style={{ width: customersGrid[6].width }}
                >
                  {info.Location}
                </div>
                <div
                  className="order_customerID"
                  style={{ width: customersGrid[7].width }}
                >
                  {info.CustomerID}
                </div>
              </div>
            );
          })}
          {
            <GridModal
              currentPage={currentPage}
              postperPage={postperPage}
              setCurrentPage={setCurrentPage}
              data={customersData}
            />
          }
        </div>
      </div>
    </div>
  );
};
export default Customers;
