import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { formatter } from "utils/fomatter";
const Header = () => {
  return (
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6 header_top_left ">
            <ul>
              <li>
                <AiOutlineMail />
                nguyenanh191025@gmail.com
              </li>
              <li>Miễn phí ship hàng từ {formatter(200000)}</li>
            </ul>
          </div>
          <div className="col-6 header_top_right">
            <ul>
              <li>
                <Link to={""}>
                  <AiFillFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiFillLinkedin />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiFillTwitterCircle />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineUser />
                </Link>
                <span>Đăng Nhập</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
