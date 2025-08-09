import React, { useState, useEffect } from "react";

function App() {
  const [form, setForm] = useState({ fullName: "", email: "", mobile: "", hospital: "" });
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = () => {
    fetch("http://localhost:5000/patients")
      .then((res) => res.json())
      .then((data) => setPatients(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        fetchPatients();
        setForm({ fullName: "", email: "", mobile: "", hospital: "" });
      });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20, maxWidth: 500, margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Patient Registration</h2>
      <div style={{ background: "#fff", padding: 20, borderRadius: 10, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Full Name", field: "fullName" },
            { label: "Email", field: "email" },
            { label: "Mobile Number", field: "mobile" },
            { label: "Hospital Name", field: "hospital" },
          ].map(({ label, field }) => (
            <div key={field} style={{ marginBottom: 15 }}>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: 5 }}>{label}</label>
              <input
                type="text"
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: 10,
                  borderRadius: 5,
                  border: "1px solid #ccc",
                  fontSize: 14,
                }}
              />
            </div>
          ))}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      </div>

      <h3 style={{ marginTop: 30 }}>Registered Patients</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {patients.map((p) => (
          <li
            key={p._id}
            style={{
              background: "#f9f9f9",
              padding: 10,
              marginBottom: 8,
              borderRadius: 5,
              border: "1px solid #eee",
            }}
          >
            <strong>{p.fullName}</strong> — {p.email} — {p.mobile} — {p.hospital}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
