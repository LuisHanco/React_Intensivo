import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fdc835c7-abb8-48d3-80e7-9befc062665f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };









return (
    <div className='contact'>
      <div className="contact-col">
        <h3>IEP Colegio Arco Iris del Cusco </h3>
        <p>"En ARCO IRIS, no solo educamos mentes; formamos líderes competentes y con la conciencia social que Cusco necesita para el futuro."</p>
        <ul>
            <li><img src={mail_icon} alt="" /> direcciongeneral@colegioarcoiris.edu.pe</li>
            <li><img src={phone_icon} alt="" /> 944093797</li>
            <li><img src={location_icon} alt="" /> AV. LA CULTURA A-14 PARADERO CAMIONERO</li>

        </ul>
      </div>
      <div className='contact-col'>
        <form action="" onSubmit={onSubmit}>
            <label htmlFor="">Tu Nombre</label>
            <input type="text" name='name' placeholder='Ingresa tu nombre' required/>
            <label htmlFor="">Tu Celular</label>
            <input type="tel" name='phone' placeholder='Ingresa tu numero de celular' required/>
            <label htmlFor="">escribe tu mensaje aqui</label>
            <textarea name="message" id=""  rows="6" required></textarea>
            <button type='submit' className='btn dark-btn'>Enviar Ahora <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
