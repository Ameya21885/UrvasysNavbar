import React from "react";
import "./Main.css";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

export default function ListViewsTabs() {
  return (
    <>
      <div>TemplatesTabs</div>
      <h2>HTML Table</h2>

      <div className="ListViewsMain">
        <div className="ListViewsA">
          <table>
            <tr>
              <th>LISTS</th>
              <th>FLEX LISTS</th>
              <th>DATABLES</th>
            </tr>
            <tr>
              <td>List View V1</td>
              <td>Flex List V1</td>
              <td>Datatable V1</td>
            </tr>
            <tr>
              <td>List View V2</td>
              <td>Flex List V2</td>
              <td>Datatable V2</td>
            </tr>
            <tr>
              <td>List View V3</td>
              <td>Flex List V3</td>
              <td>Datatable V3</td>
            </tr>
            <tr>
              <td>List View 4</td>
              <td></td>
              <td>Datatable V4</td>
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
