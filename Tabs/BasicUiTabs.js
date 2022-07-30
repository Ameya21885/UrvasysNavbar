import React from "react";
import "./Main.css";

export default function BasicUiTabs() {
  return (
    <>
      <div>PagesTabs</div>
      <h2>HTML Table</h2>

      <table>
        <tr>
          <th>GENERAL</th>
          <th>ICONS</th>
          <th>BASE</th>
          <th>ADVANCED</th>
        </tr>
        <tr>
          <td>Elements Hub</td>
          <td>Line Icons Light</td>
          <td>Buttons</td>
          <td>Basic Cards</td>
        </tr>
        <tr>
          <td>Colors</td>
          <td>Line Icons Regular</td>
          <td>Blocks</td>
          <td>Advanced Cards</td>
        </tr>
        <tr>
          <td>Helpers</td>
          <td>Font Awesome 5</td>
          <td>Content</td>
          <td>Bulma Cards</td>
        </tr>
        <tr>
          <td></td>
          <td>Feather Icons</td>
          <td>Tags</td>
          <td>Table</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Tooltips</td>
        </tr>
      </table>
    </>
  );
}
