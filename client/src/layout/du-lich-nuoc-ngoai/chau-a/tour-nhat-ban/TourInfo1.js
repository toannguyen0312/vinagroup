import React from "react";
import "./TourInfo1.css";

function TourInfo1() {

    const handleButtonClick = (e) => {
        // Remove focus immediately after click
        setTimeout(() => {
            e.target.blur();
        }, 10);
    };

    return (
        <>
            <div>
                <button 
                    type="button" 
                    className="btn custom-btn" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseInfo1" 
                    aria-expanded="false" 
                    aria-controls="collapseInfo1"
                    onClick={handleButtonClick}
                    onFocus={(e) => e.target.blur()}
                >
                    GIÁ BAO GỒM
                </button>
                <div className="collapse" id="collapseInfo1">
                    <div className="card card-body">
                        <p>• Vé máy bay theo chương trình. Hãng bay: Vietnam Airlines; hành lí xách tay: 1 kiện - 12.0 kg/kiện; hành lí kí gửi: 2 kiện - 23.0 kg/kiện</p>
                        <p>• Xe tiêu chuẩn du lịch sử dụng theo chương trình</p>
                        <p>• Khách sạn tiêu chuẩn: 2 - 3 người/phòng. Khách sạn dự kiến:</p>
                        <p>+ Đêm 1: AGORA OSAKA MORUGUCHI hoặc tương đương</p>
                        <p>+ Đêm 2: SPRING SUNNY TOKOMAE/CYPRESS GARDEN/ hoặc tương đương</p>
                        <p>+ Đêm 3: FUJIZAKURA/ FUJI GARDEN hoặc tương đương</p>
                        <p>+ Đêm 4: NIKKO NARITA hoặc tương đương</p>
                        <p>Lưu ý: Theo văn hóa Nhật Bản, các khách sạn hầu như chỉ có phòng Twin (02 giường đơn). Quý khách có nhu cầu sử dụng phòng Double (1 giường đôi) hoặc Triple (phòng cho 3 người), công ty sẽ cố gắng sắp xếp và sẽ thông tin cụ thể về tình hình phòng đến quý khách trước ngày khởi hành.</p>
                        <p>• Vé tham quan các điểm theo chương trình</p>
                        <p>• Các bữa ăn theo chương trình. Thực đơn đa dạng thay đổi hằng ngày như: lẩu Shabu Shabu, Hokkei Set, Yamanashi Set, BBQ, Chige Nabe.</p>
                        <p>• Nước uống: 01 chai 500 ml/khách/ngày</p>
                        <p>• Visa du lịch nhập cảnh Nhật Bản</p>
                        <p>• HDV phục vụ theo đoàn. Ngôn ngữ chính: tiếng Việt</p>
                        <p>• Bảo hiểm du lịch với mức bồi thường tối đa là 1,000,000,000 VNĐ/khách</p>
                        <p>• Thuế Giá trị gia tăng theo quy định của Pháp Luật Việt Nam</p>
                    </div>
                </div>
            </div>
            <div>
                <button 
                    type="button" 
                    className="btn custom-btn" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseInfo2" 
                    aria-expanded="false" 
                    aria-controls="collapseInfo2"
                    onClick={handleButtonClick}
                    onFocus={(e) => e.target.blur()}
                >
                    GIÁ KHÔNG BAO GỒM
                </button>
                <div className="collapse" id="collapseInfo2">
                    <div className="card card-body">
                        <p>• Hộ chiếu còn hạn 6 tháng tính đến ngày kết thúc tour.</p>
                        <p>• Phụ thu trường hợp quý khách yêu cầu ngủ phòng đơn (6.000.000VNĐ/khách/tour).</p>
                        <p>• Chi phí cá nhân không bao gồm trong chương trình.</p>
                        <p>• Hành lý quá cước.</p>
                        <p>• Tip cho hướng dẫn viên và lái xe (900.000 VNĐ/khách/tour).</p>
                        <p>• Visa tái nhập: 2,550,000 VNĐ/khách. (Áp dụng cho khách có Quốc tịch cần Visa vào Việt Nam)</p>
                    </div>
                </div>
            </div>
            <div>
                <button 
                    type="button" 
                    className="btn custom-btn" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseInfo3" 
                    aria-expanded="false" 
                    aria-controls="collapseInfo3"
                    onClick={handleButtonClick}
                    onFocus={(e) => e.target.blur()}
                >
                    THỦ TỤC VISA
                </button>
                <div className="collapse" id="collapseInfo3">
                    <div className="card card-body">
                        <p>• Hộ chiếu (còn thời hạn trên 6 tháng tính theo ngày về)</p>
                        <p>• Hình 4 x 6 Nền trắng độ phân giải cao đối với Quốc Tịch Việt Nam.</p>
                    </div>
                </div>
            </div>
            <div>
                <button 
                    type="button" 
                    className="btn custom-btn" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseInfo4" 
                    aria-expanded="false" 
                    aria-controls="collapseInfo4"
                    onClick={handleButtonClick}
                    onFocus={(e) => e.target.blur()}
                >
                    GIÁ BAO GỒM
                </button>
                <div className="collapse" id="collapseInfo4">
                    <div className="card card-body">
                        <p>• Hủy tour từ 30 ngày trước ngày khởi hành: Phí huỷ tour là 10% trên tổng giá tour.</p>
                        <p>• Hủy tour từ 16 – 29 ngày trước ngày khởi hành: Phí huỷ tour là 30% trên tổng giá tour.</p>
                        <p>• Hủy tour từ 08 – 15 ngày trước ngày khởi hành: Phí huỷ tour là 60% trên tổng giá tour.</p>
                        <p>• Hủy tour từ 01 – 07 ngày trước ngày khởi hành: Phí huỷ tour là 100% trên tổng giá tour.</p>
                        <p>Lưu ý: Thời gian hủy tour được tính theo ngày làm việc, không tính Thứ 7, Chủ Nhật và các ngày Lễ, Tết.</p>
                    </div>
                </div>
            </div>
            <div>
                <button 
                    type="button" 
                    className="btn custom-btn" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseInfo5" 
                    aria-expanded="false" 
                    aria-controls="collapseInfo5"
                    onClick={handleButtonClick}
                    onFocus={(e) => e.target.blur()}
                >
                    LƯU Ý
                </button>
                <div className="collapse" id="collapseInfo5">
                    <div className="card card-body">
                        <p>• Thời gian đi tour có thể thay đổi từ 1 đến 2 ngày, tùy theo ngày ra VISA của Lãnh Sự Quán Trung Quốc.</p>
                        <p>• Chuẩn bị 1 số loại thuốc như: nhức đầu, đau bụng, cảm cúm, băng keo cá nhân, dị ứng mũi...</p>
                        <p>• Lưu ý luyện tập sức khỏe 1 khoảng thời gian trước khi khởi hành để thích ứng với khí hậu cao nguyên</p>
                        <p>• Đối với khách phải sử dụng thuốc thì cần chuẩn bị đầy đủ thuốc và sử dụng theo toa của bác sĩ.</p>
                        <p>• Quý khách từ 70 tuổi trở lên yêu cầu phải có giấy xác nhận sức khỏe để đi du lịch nước ngoài do bác sĩ cấp và giấy cam kết sức khỏe với Công ty. Bất cứ sự cố nào xảy ra trên tour, Công ty sẽ không chịu trách nhiệm. (Đối với quý khách từ 80 tuổi trở lên, giá tour không bao gồm bảo hiểm du lịch)</p>
                        <p>• Không nhận khách dưới 24 tháng và từ 80 tuổi trở lên.</p>
                        <p>• Không nhận khách có thai từ 5 tháng trở lên tham gia các tour du lịch nước ngoài vì lí do an toàn cho khách.</p>
                        <p>• Do các chuyến bay phụ thuộc vào các hãng Hàng Không nên trong một số trường hợp giờ bay có thể thay đổi mà không được báo trước.</p>
                        <p>• Tùy vào tình hình thực tế, thứ tự các điểm tham quan trong chương trình có thể thay đổi nhưng vẫn đảm bảo đầy đủ các điểm tham quan như lúc đầu.</p>
                        <p>• Giá Công ty đưa ra là giá trung bình áp dụng cho 01 khách cho đoàn ghép lẻ từ … khách, trong trường hợp số lượng khách không đủ để khởi hành, Công ty sẽ báo trước cho Quý khách trước tối thiểu 03 ngày tính từ ngày khởi hành và chuyển khách sang ngày khác gần nhất mà không phải bồi hoàn thêm bất cứ chi phí nào. (Không tính Lễ, Tết).</p>
                        <p>• Du khách có mặt tại sân bay Tân Sơn Nhất - Ga đi quốc tế 03 tiếng trước giờ bay, trưởng đoàn làm thủ tục xuất cảnh cho du khách. Du khách đến trễ khi sân bay đóng quầy check in, vui lòng chịu phí như hủy vé ngay ngày khởi hành, Phía bên công ty không chịu trách nhiệm</p>
                        <p>• Quý khách tự chịu trách nhiệm trong những trường hợp vi phạm vào các điều khoản quy định về thủ tục Xuất - Nhập cảnh tại các nước sở tại và nếu bị từ chối nhập cảnh trong trường hợp này công ty du lịch sẽ không hoàn lại bất kì chi phí nào và Quý khách tự chịu chi phí phát sinh nếu có.</p>
                        <p>• Khách mang quốc tịch Nước ngoài phải có Visa (Thị thực) nhập cảnh Việt Nam còn hạn sử dụng tính đến ngày khởi hành.</p>
                        <p>• Về visa dành cho khách quốc tịch Nước ngoài/Việt kiều, vui lòng kiểm tra visa của khách vào việt nam nhiều lần hay 1 lần, Khách hàng làm visa tái nhập, ngày đi tour mang theo 2 tấm hình 4x6, phông nền trắng và mang theo visa vào việt nam khi xuất, nhập cảnh.</p>
                        <p>• Chúng tôi sẽ không chịu trách nhiệm bảo đảm các điểm tham quan trong trường hợp: Xảy ra thiên tai: bão lụt, hạn hán, động đất… Sự cố về an ninh: khủng bố, biểu tình. Sự cố về hàng không: trục trặc kỹ thuật, an ninh, dời, hủy, hoãn chuyến bay.</p>
                        <p>• Nếu những trường hợp trên xảy ra, Chúng tôi sẽ xem xét để hoàn trả chi phí không tham quan cho khách trong điều kiện có thể (sau khi đã trừ lại các dịch vụ đã thực hiện như phí làm visa….và không chịu trách nhiệm bồi thường thêm bất kỳ chi phí nào khác).</p>
                        <p>• Quý khách vui lòng không rời khỏi đoàn trong suốt chương trình tour.</p>
                        <p>• Khi đăng ký tour du lịch, Qúy khách vui lòng đọc kỹ chương trình, giá tour, các khoản bao gồm cũng như không bao gồm, các điều kiện hủy Tour,…Trong trường hợp Qúy khách không trực tiếp đến đăng ký tour mà do người khác đến đăng ký thì Qúi khách vui lòng tìm hiểu kỹ chương trình từ người đăng ký Tour cho mình.</p>
                        <p>*** Trong những trường hợp khách quan như: khủng bố, thiên tai…hoặc do có sự cố, có sự thay đổi lịch trình của các phương tiện vận chuyển công cộng như: máy bay, tàu hỏa… thì Công ty sẽ được quyền thay đổi lộ trình bất cứ lúc nào vì sự thuận tiện, an toàn cho khách hàng và sẽ không chịu trách nhiệm bồi thường những thiệt hại phát sinh ***</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TourInfo1;