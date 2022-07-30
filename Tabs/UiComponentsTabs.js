import React from "react";
import "./Main.css";

export default function UiComponentsTabs() {
  return (
    <>
      <div>UiComponentsTabs</div>
      <h2>HTML Table</h2>

      <table>
        <tr>
          <th>GENERAL</th>
          <th>INTERACTION</th>
          <th>PRESENTATION</th>
          <th>FLEX TABLE</th>
        </tr>
        <tr>
          <td>Avatars</td>
          <td>Loader</td>
          <td>Icon Box</td>
          <td>Base Table</td>
        </tr>
        <tr>
          <td>Accordion</td>
          <td>Dropdown</td>
          <td>Message</td>
          <td>Compact Table</td>
        </tr>
        <tr>
          <td>Collapse</td>
          <td>Modal Dialogs</td>
          <td>Progress</td>
          <td>Media Table</td>
        </tr>
        <tr>
          <td>Calendar</td>
          <td>Modal Dialogs</td>
          <td>Snacks</td>
          <td>Advanced Table</td>
        </tr>
        <tr>
          <td>Image Accordion</td>
          <td>Regular Tabs</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Breadcrumb</td>
          <td>Slider Tabs</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
}
