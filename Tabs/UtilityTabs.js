import React from "react";
import "./Main.css";

export default function PagesTabs() {
  return (
    <>
      <div>PagesTabs</div>
      <h2>HTML Table</h2>

      <table>
        <tr>
          <th>UTILITY</th>
          <th>ONBOARDING</th>
          <th>ERROR</th>
          <th>PLACELOAD</th>
        </tr>
        <tr>
          <td>Confirm Account</td>
          <td>Onboarding V1</td>
          <td>Error Page V1</td>
          <td>Placeload V1</td>
        </tr>
        <tr>
          <td>Promotion Page</td>
          <td>Onboarding V2</td>
          <td>Error Page V2</td>
          <td>Placeload V2</td>
        </tr>
        <tr>
          <td>Invoice</td>
          <td>Onboarding V3</td>
          <td>Error Page V3</td>
          <td>Placeload V3</td>
        </tr>
        <tr>
          <td>App status</td>
          <td>Onboarding V4</td>
          <td>Error Page V4</td>
          <td>Placeload V4</td>
        </tr>
        <tr>
          <td></td>
          <td>Onboarding V5</td>
          <td>Error Page V5</td>
          <td></td>
        </tr>
      </table>
    </>
  );
}
