import React from "react";
import "./style.css";
import profile from "../../images/Ellipse 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import photo from "../../images/profile p.png";

const files = [
  { name: "GTA5.rar", type: "RAR", size: "70GB", url: "/downloads/GTA5.rar" },
  {
    name: "Lec5 Summary.pdf",
    type: "PDF",
    size: "5MB",
    url: "/downloads/Lec5_Summary.pdf",
  },
];

const ChatDetails = () => {
  return (
    <div className="chat-details-container">
      <div className="c-d-photo">
        <img src={profile} alt="profile photo" />
      </div>
      <p className="c-d-contactname">Ahmed Zewail</p>

      <div className="c-d-icons">
        <FontAwesomeIcon
          icon={faBell}
          style={{ color: "#b8babc" }}
          size="3x"
          className="icon"
        />
        <FontAwesomeIcon
          className="icon"
          icon={faThumbTack}
          size="3x"
          color="#b8babc"
        />
      </div>
      <div className="c-photos">
        <FontAwesomeIcon
          icon={faImages}
          style={{ color: "#c7c7c7" }}
          size="2x"
          className="photo-i"
        />
        <span className="photos">Photos (1)</span>
        <span className="see">see all</span>
        <div className="allPhotos">
          <img src={photo} alt="all photos" className="photo1" />
        </div>
      </div>

      <div className="file-list-container">
        <div className="file-list-header">
          <div className="file-header-left">
            <FontAwesomeIcon
              icon={faFileLines}
              size="2x"
              style={{ color: "#c7c7c7" }}
              className="folder-icon"
            />
            <span>Files({files.length})</span>
          </div>
          <div className="file-header-right">
            <a href="#see-all" className="see-all-link">
              See all
            </a>
          </div>
        </div>

        <ul className="file-list">
          {files.map((file, index) => (
            <li key={index} className="file-item">
              <div className="file-info">
                <span className="file-name">{file.name}</span>
                <span className="file-type">{file.type}</span>
                <span className="file-size">{file.size}</span>
              </div>
              <a href={file.url} download={file.name}>
                <FontAwesomeIcon icon={faDownload} size="2x" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatDetails;
