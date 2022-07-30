import React from "react";
import "./Main.css";

export default function DashboardsTabs() {
  return (
    <>
      <div>DashboardsTabs</div>
      <h2>HTML Table</h2>

      <table>
        <tr>
          <th>PERSONAL</th>
          <th>FINANCE</th>
          <th>BUSINESS</th>
          <th>APPS</th>
        </tr>
        <tr>
          <td>Personal V1</td>
          <td>Analytics</td>
          <td>Flights Booking</td>
          <td>Food Delivery</td>
        </tr>
        <tr>
          <td>Personal V2</td>
          <td>Stocks</td>
          <td>Company Board</td>
          <td>Inbox</td>
        </tr>
        <tr>
          <td>Personal V3</td>
          <td>Scales</td>
          <td>HR Board</td>
          <td>Messaging V1</td>
        </tr>
        <tr>
          <td>Influencer</td>
          <td>Banking V1</td>
          <td>Course Board</td>
          <td>Messaging V2</td>
        </tr>
        <tr>
          <td>Hobbies</td>
          <td>Banking V2</td>
          <td>Ecommerce V1</td>
          <td></td>
        </tr>
        <tr>
          <td>Health</td>
          <td>Banking V3</td>
          <td>Map V1</td>
          <td></td>
        </tr>

        <tr>
          <td>Write</td>
          <td></td>
          <td>Map V2</td>
          <td></td>
        </tr>

        <tr>
          <td>Video</td>
          <td></td>
          <td>Jobs</td>
          <td></td>
        </tr>
      </table>
    </>
  );
}
