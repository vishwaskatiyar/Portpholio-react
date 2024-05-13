import { GiCalendar, GiClawSlashes, GiMailbox, GiPhone } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Img from "../../public/images/f1112673aabd4ec38b81380175f16899-0001.jpg";

function Aside() {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Img} alt="" />
        </figure>
        <div className="info-content">
          <h1 className="name">Vishwas Katiyar</h1>
          <p className="title">Front End Devloper</p>
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item ">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <address
                href="mailto: Vishwaskatiyar1301998@gmail.com"
                className="contact-link"
              >
                Vishwaskatiyar1301998@gmail.com
              </address>
            </div>
          </li>
          <li className="contact-item ">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tell:+919359250910" className="contact-link">
                +919359250910
              </a>
            </div>
          </li>
          <li className="contact-item ">
            <div className="icon-box">
              <GiCalendar />
            </div>
            <div className="contact-info">
              <p className="contact-title">BIRTHDAY</p>
              <time dateTime="1998-09-19" className="contact-link">
                September 13,1998
              </time>
            </div>
          </li>
          <li className="contact-item ">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address dateTime="1998-09-19">
                58/1 Kanhiya Puram Rajghat Colony Awas Vikas
              </address>
            </div>
          </li>
          <li className="contact-item ">
            <div className="icon-box">
              <FaLinkedin />
            </div>
            <div className="contact-info">
              <p className="contact-title">Linkedin</p>
              <a
                href="www.linkedin.com/in/vishwas-katiyar-8196671b4"
                target="blank"
                className="contact-link"
              >
                Visit Profile
              </a>
            </div>
          </li>
          <li className="contact-item ">
            <div className="icon-box">
              <FaGithub />
            </div>
            <div className="contact-info">
              <p className="contact-title">Git Hub</p>
              <a
                href=" https://github.com/vishwaskatiyar"
                target="blank"
                className="contact-link"
              >
                Visit Profile
              </a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
