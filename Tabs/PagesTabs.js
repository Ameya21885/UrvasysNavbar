import React from "react";
import "./Main.css";

export default function PagesTabs() {
  return (
    <>
      <div>PagesTabs</div>
      <h2>HTML Table</h2>

      <table>
        <tr>
          <th>PERSONAL</th>
          <th>PAGES</th>
          <th>SUBPAGES</th>
          <th>PROJECTS</th>
        </tr>
        <tr>
          <td>Profile</td>
          <td>Login V1</td>
          <td>Saas Billing</td>
          <td>Project V1</td>
        </tr>
        <tr>
          <td>Edit Profile</td>
          <td>Login V2</td>
          <td>Welcome</td>
          <td>Project V2</td>
        </tr>
        <tr>
          <td>Notifications</td>
          <td>Login V3</td>
          <td>Action Page V1</td>
          <td>Project V3</td>
        </tr>
        <tr>
          <td>Settings</td>
          <td>Signup V1</td>
          <td>Action page V2</td>
          <td>Project Details</td>
        </tr>
        <tr>
          <td></td>
          <td>Signup V2</td>
          <td>Search Results</td>
          <td>Project Board</td>
        </tr>
        <tr>
          <td></td>
          <td>Signup Flow</td>
          <td> Empty Search</td>
          <td></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
}
