import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './font.css'
import { Input } from '@mui/material';

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    batch: '',
    studentId: '',
    currentJob: '',
    company: '',
    transportation: '',
  });
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phoneNumber') {
      if (!value.match(phoneNumberRegex)) {
        setIsValidPhoneNumber(false)
      } else {
        setIsValidPhoneNumber(true)
      }
    }
    if (name === 'email') {
      if (!value.match(emailRegex)) {
        setIsValidEmail(false)
      } else {
        setIsValidEmail(true)
      }
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/update_data_in_s3', JSON.stringify(formData));
    } catch (error) {
      navigate('/ticket', { state: formData });
      console.error(error);
    }
  };
  const phoneNumberRegex = /^(03|05|07|08|09)+([0-9]{8})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    <Container>
      <form onSubmit={handleSubmit} style={{ marginLeft: 20 }}>

        <input
          id='outlined-basic'
          placeholder='Họ và tên'
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{
            background: '#F6D7E1', // Remove the background color
            borderBlockColor: 'transparent',
            borderRadius: 30, // Remove the border radius
            fontSize: 25,
            border: 'none',
            height: '7vh',
            width: '30vh',
            fontFamily: 'SVN',
            textAlign: 'center'
          }}

        />
        <input
          name="phoneNumber"
          placeholder='Số điện thoại liên hệ'
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          margin="normal"
          style={{
            background: '#F6D7E1', // Remove the background color
            borderBlockColor: 'transparent',
            borderRadius: 30, // Remove the border radius
            fontSize: 25,
            border: 'none',
            height: '7vh',
            width: '30vh',
            marginLeft: 40,
            fontFamily: 'SVN',
            textAlign: 'center',
            borderColor: !isValidPhoneNumber ? 'red' : 'transparent', // add border color when !isValidPhoneNumber
          }}
        />
        {!isValidPhoneNumber && (
          <p style={{ color: 'red', fontSize: 12 }}>
            Số điện thoại không hợp lệ. Vui lòng nhập số khác!!!
          </p>
        )}
        <input
          name="batch"
          placeholder='Cựu sinh viên khóa'
          value={formData.batch}
          onChange={handleChange}
          required
          margin="normal"
          sx={{
            "& fieldset": { border: 'none' },
          }}
          style={{
            background: '#F6D7E1', // Remove the background color
            borderBlockColor: 'transparent',
            borderRadius: 30, // Remove the border radius
            fontSize: 25,
            border: 'none',
            height: '7vh',
            width: '30vh',
            marginLeft: 40,
            fontFamily: 'SVN',
            textAlign: 'center',
          }}

        />
        <input
          placeholder="MSSV"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          margin="normal"
          style={{
            background: '#F6D7E1', // Remove the background color
            borderBlockColor: 'transparent',
            borderRadius: 30, // Remove the border radius
            fontSize: 25,
            border: 'none',
            height: '7vh',
            width: '25vh',
            marginLeft: 40,
            fontFamily: 'SVN',
            textAlign: 'center',
          }}
        />
        <input
          placeholder="Email cá nhân"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          margin="normal"
          error={!isValidEmail}
          style={{
            background: '#F6D7E1', // Remove the background color
            borderBlockColor: 'transparent',
            borderRadius: 30, // Remove the border radius
            fontSize: 25,
            border: 'none',
            height: '7vh',
            width: '30vh',
            marginTop: 20,
            marrginRight:20,
            fontFamily: 'SVN',
            textAlign: 'center',
          }}
        />
        {
          !isValidEmail && (<p style={{ color: 'red', fontSize: 12 }}>'Email nhập không hợp lệ. Vui lòng nhập lại email' : ''</p>)
        }

        <input
          placeholder="Công việc hiện tại"
          name="currentJob"
          value={formData.currentJob}
          onChange={handleChange}
          margin="normal"
          style={{
            background: '#F6D7E1', // Remove the background color
            borderBlockColor: 'transparent',
            borderRadius: 30, // Remove the border radius
            fontSize: 25,
            border: 'none',
            height: '7vh',
            width: '30vh',
            marginTop: 20,
            marginLeft:40,
            marrginRight:20,
            fontFamily: 'SVN',
            textAlign: 'center',
          }}
        />
        <input
          placeholder="Tên công ty đang làm việc"
          name="company"
          value={formData.company}
          onChange={handleChange}
          margin="normal"
          style={{
            background: '#F6D7E1', // Remove the background color
            borderBlockColor: 'transparent',
            borderRadius: 30, // Remove the border radius
            fontSize: 25,
            border: 'none',
            height: '7vh',
            width: '60vh',
            marginTop: 20,
            marginLeft:40,
            marrginRight:20,
            fontFamily: 'SVN',
            textAlign: 'center',
          }}
        />
        <FormControl margin="normal" sx={{
          "& fieldset": { border: 'none' },
        }}
          style={{
            background: '#F6D7E1', // Remove the background color
            borderRadius: 30, // Remove the border radius
            marginTop:40,
            height: '7vh',
            width: '91%',
          }}
          InputProps={
            {
              style: {
                fontFamily: 'SVN',
                fontSize: 25,
                marginLeft: 10,
                marginTop: -7
              }
            }
          }>
          {formData.transportation ? null : (
            <InputLabel style={{
              fontFamily: 'SVN',
              fontSize: 25,
              marginLeft: 10,
              marginTop: -7
            }}>Bạn sẽ di chuyển đến địa điểm bằng phương tiện gì?</InputLabel>
          )}
          <Select
            labelId="transportation-label"
            name="transportation"
            value={formData.transportation}
            onChange={handleChange}
            required
            style={{
              fontFamily: 'SVN',
              fontSize: 25,
              whiteSpace: 'normal',
              marginLeft: 10,
              marginTop: -7
            }}
          >
            <MenuItem disabled value="" style={{
              fontFamily: 'SVN',
              fontSize: 25
            }}>
              <em>Chọn phương tiện di chuyển</em>
            </MenuItem>
            <MenuItem value="Tự di chuyển" style={{
              fontFamily: 'SVN',
              fontSize: 25
            }}>Tự di chuyển</MenuItem>
            <MenuItem value="Di chuyển bằng xe trường (có xe đưa đón 2 chiều từ Detech Tôn Thất Thuyết đến Hòa Lạc)" style={{
              fontFamily: 'SVN',
              fontSize: 25,
              whiteSpace: 'normal',
            }}>
              Di chuyển bằng xe trường (có xe đưa đón 2 chiều từ Detech Tôn Thất Thuyết đến Hòa Lạc)
            </MenuItem>
          </Select>
        </FormControl>

        <Button style={{
          margin: '0 auto', display: 'block', marginTop: 15, marginBottom: 10, padding: 10, fontFamily: 'SVN',
          fontSize: 25, borderRadius: 30
        }} variant="contained" color="primary" type="submit" >
          nhận vé tham gia
        </Button>
      </form>

    </Container>

  );
}

export default RegistrationForm;
