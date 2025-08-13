import React from "react";
import "./TourNhatBanDetail.css"

function TourNhatBanDetail() {
    return (
        <div>
            <section className="py-5">
            <ul className="timeline">
                <li className="timeline-item mb-5">
                <h5 className="fw-bold">ĐÊM 01: TP. HỒ CHÍ MINH – OSAKA   </h5>
                <p className="text-muted">21:00 Quý khách tập trung tại ga quốc tế, sân bay Tân Sơn Nhất làm thủ tục đáp chuyến bay của hãng hàng không Vietnam Airlines đến sân bay Kansai.</p>
                <p className="text-muted">
                    Chuyến bay dự kiến: VN320 SGNKIX (00:10 - 07:00)
                    Đoàn nghỉ đêm và ăn sáng trên máy bay
                </p>
                </li>

                <li className="timeline-item mb-5">
                <h5 className="fw-bold">NGÀY 01: KANSAI – KOBE - OSAKA  (Ăn sáng trên máy bay, ăn Trưa, Tối)</h5>
                <p className="text-muted">
                    <span className="time-highlight">Sáng:</span> Đến sân bay Quốc tế Kansai, đoàn làm thủ tục nhập cảnh, sau đó xe và HDV đưa đoàn khởi hành tham quan
                    <br />
                    <span className="location-highlight bullet-point">Bảo tàng rượu Hakutsuru Sake Brewery:</span> là một địa danh du lịch nổi tiếng <span className="place-name">Kobe, Nhật Bản</span>. Tại đây có nội dung trưng bày dễ hiểu với nhiều thông tin thú vị về quy trình chế biến rượu <span className="special-highlight">sake</span> ở Nhật Bản. Du khách sẽ được mời thử vài loại rượu sake sau khi hiểu phương pháp nấu loại rượu quan trọng này của người Nhật.
                    <br />
                    <span className="location-highlight bullet-point">Cầu Cảng Kobe:</span> nổi tiếng với tháp cảng Kobe là một thiết kế rất độc đáo, hiếm có trên thế giới.
                    <br />
                    <br />
                    <span className="time-highlight">Trưa:</span> Đoàn dùng bữa trưa với <span className="special-highlight">đặc sản bò Kobe</span> trứ danh. Sau đó, di chuyển về <span className="place-name">Osaka</span>, tham quan:
                    <br />
                    <span className="location-highlight bullet-point">Lâu đài Osaka:</span> là biểu tượng chính của Osaka, được xây dựng từ thế kỷ XVI bởi <span className="special-highlight">Toyotomi Hideyoshi</span> – người đầu tiên hoàn thành công cuộc thống nhất Nhật Bản. (chụp ảnh bên ngoài)
                    <br />
                    <span className="location-highlight bullet-point">Thưởng thức Maiko Show:</span> quý khách sẽ được thưởng thức màn biểu diễn múa hát và chơi nhạc cụ truyền thống của Nhật Bản của các <span className="special-highlight">Maiko (Geisha tập sự)</span>. Đồng thời, có cơ hội mặc <span className="special-highlight">Kimono</span> giản lược và chụp hình lưu niệm cùng Maiko, là một trải nghiệm đầy thú vị để hiểu rõ thêm về một nét văn hóa truyền thống đặc trưng của Nhật Bản.
                    <br />
                    <br />
                    <span className="time-highlight">Tối:</span> Đoàn dùng bữa tối tại nhà hàng địa phương. Sau bữa tối, đoàn nhận phòng khách sạn nghỉ ngơi.
                    <br />
                    Nghỉ đêm ở <span className="special-highlight">khách sạn 4* Osaka</span>.
                </p>
                </li>

                <li className="timeline-item mb-5">
                <h5 className="fw-bold">NGÀY 02: OSAKA – KYOTO – NAGOYA  (Ăn Sáng, Trưa, Tối)</h5>
                <p className="text-muted">
                    <span className="time-highlight">Sáng:</span> Đoàn dùng bữa sáng, làm thủ tục trả phòng. Xe đưa đoàn di chuyển tham quan:
                    <br />
                    <span className="location-highlight bullet-point">Đền Fushimi Inari:</span> được xây dựng vào thế kỷ VIII và là một trong những ngôi đền Thần đạo quan trọng và lâu đời nhất tại <span className="place-name">Nhật Bản</span>, được mệnh danh là <span className="special-highlight">Ngôi đền Nghìn cổng huyền thoại</span> với hơn 10000 cổng <span className="special-highlight">Torii</span> lấp lánh màu đỏ cam linh thiêng.
                    <br />
                    <span className="location-highlight bullet-point">Rừng tre Arashiyama:</span> nơi mang nhiều ý nghĩa trong văn hóa <span className="place-name">Nhật Bản</span>. Được <span className="special-highlight">CNN</span> xếp vào <span className="special-highlight">top 100 con đường tuyệt nhất thế giới</span>. Âm thanh của khu rừng được <span className="special-highlight">Bộ Môi trường Nhật Bản</span> đưa vào danh sách 100 âm thanh của Nhật Bản, và khuyến khích người dân cảm nhận những âm thanh tự nhiên đặc trưng của <span className="place-name">xứ sở mặt trời mọc</span>.
                    <br />
                    <br />
                    <span className="time-highlight">Trưa:</span> Đoàn dùng bữa trưa tại nhà hàng địa phương. Sau đó di chuyển đến <span className="place-name">Nagashima</span>
                    <br />
                    <span className="bullet-point">Tự do tham quan, mua sắm tại <span className="location-highlight">Trung tâm mua sắm Mitsui Jazz Dream Nagashima:</span> một trong những trung tâm mua sắm lớn nhất <span className="place-name">Nhật Bản</span> với hơn <span className="special-highlight">240 cửa hàng</span> với đa dạng hàng hóa. Quý khách có thể mua sắm từ thương hiệu sang trọng đến thương hiệu bình dân nổi tiếng tại Nhật Bản, đồng thời trải nghiệm ẩm thực và các hoạt động giải trí khác.</span>
                    <br />
                    <br />
                    <span className="time-highlight">Tối:</span> Đoàn dùng bữa tối tại nhà hàng địa phương. Sau bữa tối, đoàn nhận phòng khách sạn. Nghỉ đêm ở <span className="place-name">Nagoya</span>.
                </p>
                </li>

                <li className="timeline-item mb-5">
                <h5 className="fw-bold">NGÀY 03: NAGOYA – YAMANASHI  (Ăn Sáng, Trưa, Tối)</h5>
                <p className="text-muted">
                    <span className="time-highlight">Sáng:</span> Đoàn dùng bữa sáng, làm thủ tục trả phòng. Đoàn trải nghiệm di chuyển bằng tàu <span className="special-highlight">Shinkansen</span> - niềm tự hào của nền giao thông <span className="place-name">Nhật Bản</span>, tham quan, trải nghiệm:
                    <br />
                    <span className="location-highlight bullet-point">Công viên Oishi:</span> nằm ở bờ phía bắc của hồ <span className="special-highlight">Kawaguchiko</span> của <span className="place-name">Nhật Bản</span>. Với tầm nhìn tuyệt vời về khung cảnh rộng lớn của hồ và tầm nhìn tráng lệ của <span className="special-highlight">núi Phú Sĩ</span> cũng như nhiều loài hoa theo mùa là những đặc điểm quyến rũ chỉ có ở công viên Oishi. Đặc biệt là vào mùa <span className="special-highlight">hoa lavender</span> (giữa tháng 6 – tháng 7), nơi đây trải dài với cánh đồng hoa lavender tỏa sắc tím đầy lãng mạn.
                    <br />
                    <br />
                    <span className="time-highlight">Trưa:</span> Đoàn dùng bữa trưa tại nhà hàng địa phương. Sau đó, tham quan:
                    <br />
                    <span className="location-highlight bullet-point">Núi Phú Sĩ:</span> (lên đến trạm 5 nếu thời tiết tốt) với độ cao <span className="special-highlight">3776m</span>, là ngọn núi cao nhất ở <span className="place-name">Nhật Bản</span>. Ngọn núi hùng vĩ này còn là một biểu tưởng đặc trưng, một địa điểm tâm linh rất quan trọng và còn là nguồn cảm hứng nghệ thuật vô tận trong đời sống tinh thần của người Nhật.
                    <br />
                    <span className="location-highlight bullet-point">Làng văn hóa Oshino Hakkai:</span> được <span className="special-highlight">Unesco</span> công nhận là <span className="special-highlight">Di sản Văn hóa Thế giới</span>. Nổi bật với nhiều ao hồ cùng các mảng xanh cực kỳ mát mẻ, xa xa là các ngôi nhà được lợp bằng các loại cỏ cực kỳ đặc biệt.
                    <br />
                    <br />
                    <span className="time-highlight">Tối:</span> Đoàn dùng bữa tối. Nhận phòng khách sạn nghỉ ngơi.
                    <br />
                    <span className="bullet-point">Trải nghiệm tắm <span className="special-highlight">Onsen</span> – một kiểu ôn tuyền thủy liệu pháp của người Nhật.</span>
                    <br />
                    Nghỉ đêm ở <span className="place-name">Yamanashi</span>
                </p>
                </li>

                <li className="timeline-item mb-5">
                <h5 className="fw-bold">NGÀY 04: YAMANASHI – TOKYO – NARITA (Ăn Sáng, Trưa, Tối) </h5>
                <p className="text-muted">
                        <span className="time-highlight">Sáng:</span> Đoàn dùng bữa sáng, làm thủ tục trả phòng, đoàn đi chuyển về <span className="place-name">Tokyo</span>, tham quan
                        <br />
                        <span className="location-highlight bullet-point">Hoàng Cung Nhật Bản</span> – nơi <span className="special-highlight">Nhật Hoàng</span> sống và làm việc. Với kiến trúc vô cùng xa hoa, tráng lệ. Nơi đây không chỉ gây ấn tượng bởi thiết kế cổ xưa mà còn sở hữu cảnh quan thiên nhiên hài hòa và bầu không khí trong lành, dễ chịu. (tham quan và chụp ảnh bên ngoài)
                        <br />
                        <br />
                        <span className="time-highlight">Trưa:</span> Đoàn dùng bữa trưa tại nhà hàng địa phương. Sau đó đoàn tiếp tục tham quan:
                        <br />
                        <span className="location-highlight">Chùa Asakusa:</span> còn gọi là <span className="special-highlight">Sensoji</span> - với lối kiến trúc đặc trưng mang đậm dấu ấn <span className="place-name">Nhật Bản</span>, có thể nói đây là ngôi chùa cổ nhất và quan trọng bậc nhất <span className="place-name">Tokyo</span>. Chụp hình với chiếc <span className="special-highlight">đèn lồng bằng giấy khổng lồ</span> treo ở chính giữa cổng là biểu tượng của <span className="place-name">Asakusa</span>.
                        <br />
                        <span className="bullet-point">Dạo quanh <span className="location-highlight">phố Nakamise</span> dẫn vào chùa Asakusa nhộn nhịp với hằng trăm gian hàng đồ truyền thống, quà lưu niệm và món ăn địa phương.</span>
                        <br />
                        <span className="location-highlight">Tháp truyền hình Tokyo Skytree:</span> một trong những biểu tượng của <span className="place-name">Nhật Bản</span> (chụp ảnh bên ngoài).
                        <br />
                        <span className="bullet-point">Dạo phố, mua sắm tại <span className="location-highlight">trung tâm điện tử Akihabara</span>, gắn liền với các nhân vật <span className="special-highlight">anime và manga</span> nổi tiếng được trưng bày nổi bật trong các cửa hàng (nếu có đủ thời gian)</span>
                        <br />
                        <br />
                        <span className="time-highlight">Tối:</span> Đoàn dùng bữa tối tại nhà hàng địa phương. Nhận phòng khách sạn nghỉ ngơi.
                        <br />
                        Nghỉ đêm <span className="special-highlight">khách sạn 4 sao</span> tại <span className="place-name">Narita</span>
                    </p>
                </li>

                <li className="timeline-item mb-5">
                <h5 className="fw-bold">NGÀY 05: NARITA – TP. HỒ CHÍ MINH (Ăn sáng, Ăn nhẹ trên máy bay)</h5>
                <p className="text-muted">
                    <span className="time-highlight">Sáng:</span> Đoàn làm thủ tục trả phòng. Ăn sáng tại khách sạn. Di chuyển ra <span className="location-highlight">sân bay Quốc tế Narita</span> làm thủ tục đáp chuyến bay về lại <span className="place-name">Tp Hồ Chí Minh</span>.
                    <br />
                    Chuyến bay dự kiến: <span className="special-highlight">VN307 NRTSGN (09:30 - 14:10)</span>
                    <br />
                    <br />
                    <span className="time-highlight bullet-point">14h10:</span> Đoàn đáp <span className="location-highlight">Sân bay Quốc tế Tân Sơn Nhất</span>, HDV chia tay đoàn và hẹn gặp lại Quý khách trong những hành trình sau.
                </p>        
                </li>
            </ul>
            </section>
        </div>  
    );
}

export default TourNhatBanDetail;