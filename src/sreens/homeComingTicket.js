import { useLocation } from 'react-router-dom';
import { React, useState, useRef } from 'react';
import alumniLogo from '../asset/alumni_logo.png'
import hcmLogo from '../asset/logo_hcm.png'
import './font.css'
import html2canvas from 'html2canvas';
import ticketBackground from "../asset/ticket_background.png"
import { Button, CardMedia } from '@mui/material';

function TicketForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const ticketRef = useRef(null);
  const selectNewImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
      }
    };
    input.click();
  };
  console.log(selectedImage)
  const dowloadTicket = () => {
    window.scrollTo(0, 0);
    const ticket = ticketRef.current; // Use the ref to access the ticket element
    // add space around 20px above the content of the ticket
    ticket.style.paddingTop = '1px';
    // hide the background
    const prevBackground = ticket.style.backgroundImage;
    ticket.style.backgroundImage = `url(${ticketBackground})`;
    html2canvas(ticket, { scale: 2 }).then((canvas) => {
      // restore the background
      ticket.style.backgroundImage = prevBackground;
      // remove the added space
      ticket.style.paddingTop = '0';
      const link = document.createElement('a');
      link.download = 'ticket.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const location = useLocation();
  const { fullName, batch } = location.state;
  const batchNumber = batch.match(/\d+/)[0];
  return (
    <div>
      <div id="ticket" style={{ margin: 'auto', width: 494, marginTop:40 }} ref={ticketRef}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop:30 }}>
          <img src={alumniLogo} alt="Alumni Logo" style={{ width: '150px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={hcmLogo} alt="Home Coming Logo" style={{ width: '300px', marginTop: 10 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 style={{ fontFamily: 'CupCake', color: 'white', fontSize: "55px", fontWeight: 'inherit', marginTop: -10 }} >Như ngày hôm qua</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 style={{ fontFamily: 'helga', color: 'white', marginTop: -40, fontSize: "30px", fontWeight: '1' }}>trân trọng kính mời</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {
            !selectedImage && (
              <Button
                onClick={selectNewImage}
                style={{
                  fontFamily: 'SVN',
                  color: 'white',
                  background: '#2D5288',
                }}
              >
                Tải lên bức ảnh cá nhân của bạn
              </Button>
            )
          }
          {selectedImage && (
            <div style={{  }}>
              <img
                id='avt'
                style={{
                  width: "270px",
                  height: "270px",
                  borderRadius: "50%",
                  border: '3px solid #82A7CB',
                  backgroundSize: 'cover',
                  backgroundImage: `url(${selectedImage})`
                }}
                onClick={selectNewImage}
              />
            </div>)
          }
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: -50 }}>
          <h1 style={{ fontFamily: 'CupCake', color: 'white', fontWeight: '1', fontSize: 50 }} >{fullName}</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: -60 }}>
          <h3 style={{ fontFamily: 'SVN', color: 'white', fontSize: "30px", fontWeight: 'lighter', background: "#2D5288", paddingLeft: 10, paddingRight: 10, borderRadius: 17 }} >Cựu sinh viên khóa {batchNumber}</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: -20 }}>
          <h3 style={{ color: '#45093f', fontFamily: 'helga', marginTop: 0, fontSize: "", fontWeight: 'lighter' }}>Thời gian</h3>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 style={{ color: '#45093f', fontFamily: 'SVN', fontSize: "", marginTop: -20 }} >14:00 - 18:00 ngày 11/11/2023</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: -20 }}>
          <h3 style={{ color: '#45093f', fontFamily: 'helga', marginTop: 0, fontSize: "", fontWeight: 'lighter' }}>Địa điểm</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 style={{ color: '#45093f', fontFamily: 'SVN', fontSize: "", marginTop: -20 }} >Trường Đại học FPT cơ sở Hà Nội</h3>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={dowloadTicket} style={{ fontFamily: 'SVN', color: 'white', background: '#2D5288' }}>
          Tải vé
        </Button>
      </div>
    </div >

  );
}

export default TicketForm;
