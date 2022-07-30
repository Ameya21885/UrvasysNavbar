import React from "react";
import "./Main.css";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

export default function JsPluginsTabs() {
  return (
    <>
      <div>FormControlsTabs</div>
      <h2>HTML Table</h2>

      <div className="ListViewsMain">
        <div className="ListViewsA">
          <table>
            <tr>
              <td>Alertify</td>
              <td>Filepond</td>
              <td>Toast Messages</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Autocomplete</td>
              <td>Light Gallery</td>
              <td>WebUI Popovers</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Datepicker</td>
              <td>Video Gallery</td>
              <td>NoUi Slider</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Choices JS</td>
              <td>Video Player</td>
              <td>Summernote</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Sun Editor</td>
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
