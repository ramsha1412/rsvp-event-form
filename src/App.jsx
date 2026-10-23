import { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendees: 0,
    dietaryPref: "",
    bringingGuests: false
  })
  const [submittedData, setSubmittedData] = useState(null);
  const handleChange=(event)=> {
    const { name, value, type, checked } = event.target
    let finalValue = value 
    if(type === 'checkbox'){
      finalValue = checked
    }
    if(type === 'number'){
      finalValue = value === '' ? '' : Number(value)
    }
    setFormData((prevData)=> ({
      ...prevData,
      [name] : finalValue,
    }))
  }
  const handleSubmit=(event)=> {
    event.preventDefault()
    setSubmittedData(formData);
  }
  return(
    <form onSubmit={handleSubmit}>
      <h1>RSVP Event Form</h1>
      <input id="name-input" type="text" placeholder="Enter your name." name="name" value={formData.name} onChange={handleChange} required/>

      <input id="email-input" type="email" placeholder="Enter your email." name="email" value={formData.email} onChange={handleChange} required/>

      <input id="num-input" type="number" min="1" placeholder="Enter the number of attendees." name="attendees" value={formData.attendees} onChange={handleChange} required/>

      <label htmlFor="dietary-pref">Dietary Preference</label>
      <input id="dietary-pref" type="text" name="dietaryPref" value={formData.dietaryPref} onChange={handleChange} />

      <label htmlFor="guests">Additional Guests:</label>
      <input type="checkbox" id="guests" name="bringingGuests" checked={formData.bringingGuests} onChange={handleChange} />

      <button id="submit-btn">Submit</button>

      {submittedData && (
        <div style={{ backgroundColor: 'white', minWidth: '300px', marginTop: '20px', padding: '10px', border: '3px solid black', borderRadius: '4px'}}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Number of attendees:</strong> {submittedData.attendees}</p>
          <p><strong>Dietary preferences:</strong> {submittedData.dietaryPref}</p>
          <p><strong>Bringing additional guests:</strong> {submittedData.bringingGuests ? 'Yes' : 'No'}</p>
        </div>
      )}
    </form>
  )
}
