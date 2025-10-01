import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NewDashBoardNav.css";

function NewDashBoardNav() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [duLichNuocNgoaiOpen, setDuLichNuocNgoaiOpen] = useState(false);
    const [duLichTrongNuocOpen, setDuLichTrongNuocOpen] = useState(false);

    const toggleDuLichNuocNgoai = () => {
        console.log('Toggle clicked, current state:', duLichNuocNgoaiOpen);
        setDuLichNuocNgoaiOpen(!duLichNuocNgoaiOpen);
    }

    const toggleDuLichTrongNuoc = () => {
        setDuLichTrongNuocOpen(!duLichTrongNuocOpen);
    }

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
    }

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    const closeOffcanvas = () => {
        setIsOffcanvasOpen(false);
    };
    

    return (
        <div>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <div className="logo-nav">
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            onClick={toggleOffcanvas}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title">
                                <Link to="/" className="nav-title-link">Trang Chủ</Link>
                            </h5>
                            <button 
                                type="button" 
                                className="btn-close" 
                                onClick={closeOffcanvas}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item"><Link to="/gioi-thieu" className="nav-title-link">Giới Thiệu</Link></li>
                                <li className="nav-item">
                                    <span onClick={toggleDuLichNuocNgoai} style={{cursor: 'pointer'}}>
                                        Du Lịch Nước Ngoài
                                    </span>
                                    <div style={{
                                        maxHeight: duLichNuocNgoaiOpen ? '500px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.3s ease',
                                        opacity: duLichNuocNgoaiOpen ? '1' : '0',
                                        borderRadius: '4px'
                                    }}>
                                        <ul style={{listStyle: 'none', paddingLeft: '20px', margin: '10px 0'}}>
                                            <li><Link to="/tour-chau-au">Tour Châu Âu</Link></li>
                                            <li><Link to="/tour-chau-a">Tour Châu Á</Link></li>
                                            <li><Link to="/tour-chau-my">Tour Châu Mỹ</Link></li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <span onClick={toggleDuLichTrongNuoc} style={{cursor: 'pointer'}}>
                                        Du Lịch Trong Nước
                                    </span>
                                    <div style={{
                                        maxHeight: duLichTrongNuocOpen ? '800px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.3s ease',
                                        opacity: duLichTrongNuocOpen ? '1' : '0',
                                        borderRadius: '4px'
                                    }}>
                                        <ul style={{listStyle: 'none', paddingLeft: '20px', margin: '10px 0'}}>
                                            <li><Link to="/mien-bac">Miền Bắc</Link></li>
                                            <li><Link to="/mien-trung">Miền Trung - Tây Nguyên</Link></li>
                                            <li><Link to="/mien-nam">Miền Nam</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item"><Link to="/teambuilding-su-kien" className="nav-title-link">Teambuilding & Sự Kiện</Link></li>
                                <li className="nav-item"><Link to="/cam-nang-du-lich" className="nav-title-link">Cẩm Nang Du Lịch</Link></li>
                                <li className="nav-item"><Link to="/goc-truyen-thong" className="nav-title-link">Góc Truyền Thông</Link></li>
                                <li className="nav-item"><Link to="/lien-he" className="nav-title-link">Liên Hệ</Link></li>                                
                            </ul>
                        </div>
                    </div>
                    {isOffcanvasOpen && <div className="offcanvas-backdrop fade show" onClick={closeOffcanvas}></div>}
                </div>
            </nav>
        </div>
    );
}

export default NewDashBoardNav;