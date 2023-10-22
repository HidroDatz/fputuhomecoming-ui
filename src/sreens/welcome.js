import React from 'react';
import alumniLogo from '../asset/alumni_logo.png';
import './font.css'
function Welcome() {
    document.title = "Home Coming 2023";

    return (
        <div style={{}}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={alumniLogo} alt="Alumni Logo" style={{ width: '25%' }} />
            </div>
            <h1 style={{fontFamily:'CupCake', textAlign:'center',color:'white',  marginBottom:15,marginTop:-10,  fontSize: '60px' }} >Đăng ký tham gia Homecoming - Như ngày hôm qua</h1>
            <div style={{ textAlign: 'center',maxWidth:'1200px', margin: '0 auto' }}>
                <h1 style={{fontFamily:'SVN', color:'white'}}>
                   14:00-18:00 ngày 11/11/2023 | Trường Đại học FPT cơ sở Hà Nội
                </h1>
                <h2 style={{marginTop:10, fontFamily:'SVN', color:'#f0d8ec'}}>
                    Lấy cảm hứng từ những thước phim đầy mê hoặc của năm tháng sinh viên áo Cam rực cháy, mỗi ký ức của từng khóa sinh viên FPTU đều được tái hiện qua vô vàn thước phim cũ. Hãy cùng FPT University Alumni tua ngược thước phim quá khứ, cùng sống trọn vẹn lại những năm tháng rực rỡ thời sinh viên tại “Homecoming 2023 - Như ngày hôm qua” nhé
                </h2>
            </div>
        </div>

    );
}

export default Welcome;
