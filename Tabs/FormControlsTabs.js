import React from "react";
import "./Main.css";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

export default function FormControlsTabs() {
  return (
    <>
      <div>FormControlsTabs</div>
      <h2>HTML Table</h2>

      <div className="ListViewsMain">
        <div className="ListViewsA">
          <table>
            <tr>
              <th>INPUT</th>
              <th>SELECTS</th>
              <th>TOGGLES</th>
            </tr>
            <tr>
              <td>Inputs</td>
              <td>Regular</td>
              <td>checkboxes</td>
            </tr>
            <tr>
              <td>Input Addons</td>
              <td>Custom</td>
              <td>Radio Buttons</td>
            </tr>
            <tr>
              <td>Textarea</td>
              <td>File Input</td>
              <td>Switches</td>
            </tr>
          </table>
        </div>

        <div className="ListViewsB">
          <div className="ListViewsBa">
            <DocumentScannerIcon />
          </div>
          <div className="ListViewsBa">
            <DocumentScannerIcon />
          </div>
        </div>
      </div>
    </>
  );
}
