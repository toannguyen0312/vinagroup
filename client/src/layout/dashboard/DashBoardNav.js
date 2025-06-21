import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./DashBoardNav.css";

function DashBoardNav({ mobileMenuOpen, setMobileMenuOpen }) {
    const menuRef = useRef(null);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    //Click Handler for Submenu
    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            console.log("Click detected outside menu. Closing.");
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="nav-container">
            <nav ref={menuRef}>
                <ul className={`nav-list ${mobileMenuOpen ? 'show' : ''}`}>
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item"><Link to="/gioi-thieu">Giới Thiệu</Link></li>
                    <li className="nav-item" onClick={toggleSubmenu}>Du Lịch Nước Ngoài
                        <ul className={`submenu-list${submenuOpen ? " show " : ""}`}>
                            <li><Link to="/tour-chau-au">Tour Châu Âu</Link></li>
                            <li><Link to="/tour-chau-a">Tour Châu Á</Link></li>
                            <li><Link to="/tour-chau-my">Tour Châu Mỹ</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item" onClick={toggleSubmenu}>Du Lịch Trong Nước
                        <ul className={`submenu-list${submenuOpen ? " show " : ""}`}>
                            <li><Link to="/mien-bac">Miền Bắc</Link>
                                <ul className="submenu-mienbac">
                                    <li>
                                        <Link to="/ha-noi-ha-giang">Tour Đông Bắc</Link>
                                    </li>
                                </ul>
                            </li>
                            <li><Link to="/mien-trung">Miền Trung - Tây Nguyên</Link>
                                <ul className="submenu-mientrung">
                                    <li>
                                        <Link to="/da-nang">Tour Đà Nẵng - Huế - Quảng Bình</Link>
                                    </li>
                                    <li>
                                        <Link to="/quy-nhon">Tour Quy Nhơn - Kỳ Co - Eo Gió</Link>
                                    </li>
                                    <li>
                                        <Link to="/phu-yen-mui-dai-lanh-vinh-vung-ro-ghenh-da-dia">Tour Phú Yên - Mũi Đại Lãnh - Vịnh Vùng Vô - Ghềnh Đá Đĩa</Link>
                                    </li>
                                </ul>
                            </li>
                            <li><Link to="/mien-nam">Miền Nam</Link>
                                <ul className="submenu-miennam">
                                    <li>
                                        <Link to="/phu-quoc-nghi-duong-cao-cap">Tour Phú Quốc: Nghỉ dưỡng cao cấp</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item"><Link to="/teambuilding-su-kien">Teambuilding & Sự Kiện</Link></li>
                    <li className="nav-item"><Link to="/cam-nang-du-lich">Cẩm Nang Du Lịch</Link></li>
                    <li className="nav-item"><Link to="/goc-truyen-thong">Góc Truyền Thông</Link></li>
                    <li className="nav-item"><Link to="/lien-he">Liên Hệ</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default DashBoardNav;