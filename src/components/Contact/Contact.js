import React, { useState } from 'react';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'name' ? setName(value) : name=== 'email'? setEmail(value): setMessage(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    alert(`Thank you for your message!`);
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <section id="Contact">
    <h2>Let's Connect!</h2>
    <form className="form">
        <input
          value={name}
          name="name"
          type="text"
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          type="text"
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          type="text"
          onChange={handleInputChange}
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    <p><span>&#9742;</span> 678-744-6020</p>
    <p><span>&#9993;</span> melissadonato11@gmail.com</p>

</section>
  );
}

export default Contact;