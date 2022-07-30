import React from "react";
import "./Main.css";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

export default function GridViewsTabs() {
  return (
    <>
      <div>GridViewsTabs</div>
      <h2>HTML Table</h2>

      <div className="ListViewsMain">
        <div className="ListViewsA">
          <table>
            <tr>
              <th>CARDS</th>
              <th>TILES</th>
              <th>USERS</th>
            </tr>
            <tr>
              <td>Card Grid V1</td>
              <td>Tile Grid V1</td>
              <td>User Grid V1</td>
            </tr>
            <tr>
              <td>Card Grid V2</td>
              <td>Tile Grid V2</td>
              <td>User Grid V2</td>
            </tr>
            <tr>
              <td>Card Grid V3</td>
              <td>Tile Grid 3</td>
              <td>User Grid V3</td>
            </tr>
            <tr>
              <td>Card Grid V4</td>
              <td></td>
              <td>User Grid V4</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
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
