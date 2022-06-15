import React, { useState, useRef } from "react";
import { Typography } from "@material-ui/core";
// import "../../node_modules/@syncfusion/ej2-react-grids/styles/material.scss";
import { ordersData, ordersGrid, contextMenuItems } from "../data/dummy";
import { GridOrderImage, GridOrderStatus } from "../data/dummy";
import GridModal from "../components/modal";
import Header from "../components/Header";
import { useStateContext } from "../context/context";
const Order: React.FC = () => {
  const { setCurrentPage, postperPage, currentPage } = useStateContext();
  const indexOflastPost = currentPage * postperPage;
  const indexOfFirstPost = indexOflastPost - postperPage;
  const currentPost = ordersData.slice(indexOfFirstPost, indexOflastPost);
  return (
    <div
      style={{
        margin: "2rem 3rem",
        height: "85vh",
        overflowY: "scroll",
      }}
    >
      <Header bigtext="Orders" smallText="Page" />
      <div className="order_list-box">
        <div className="gridheaders">
          {ordersGrid.map(({ headerText, textAlign, width }) => (
            <div className="header" style={{ width, textAlign: "center" }}>
              {headerText}
            </div>
          ))}
        </div>
        {currentPost.map((order, index) => {
          return (
            <div className="order_container">
              <div
                className="order_image"
                style={{ width: ordersGrid[0].width }}
              >
                {<GridOrderImage order={order.ProductImage} />}
              </div>
              <div
                className="order_item"
                style={{ width: ordersGrid[1].width }}
              >
                {order.OrderItems}
              </div>
              <div
                className="order_customer_name"
                style={{ width: ordersGrid[2].width }}
              >
                {order.CustomerName}
              </div>
              <div
                className="order_totalAmount"
                style={{ width: ordersGrid[3].width }}
              >
                {order.TotalAmount}
              </div>
              <div
                className="order_status"
                style={{ width: ordersGrid[4].width }}
              >
                {
                  <GridOrderStatus
                    Status={order.Status}
                    StatusBg={order.StatusBg}
                  />
                }
              </div>
              <div className="order_id" style={{ width: ordersGrid[5].width }}>
                {order.OrderID}
              </div>
              <div
                className="order_location"
                style={{ width: ordersGrid[6].width }}
              >
                {order.Location}
              </div>
            </div>
          );
        })}
        {
          <GridModal
            currentPage={currentPage}
            postperPage={postperPage}
            setCurrentPage={setCurrentPage}
            data={ordersData}
          />
        }
      </div>
    </div>
  );
};

export default Order;
