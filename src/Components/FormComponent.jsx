import  { useState } from 'react';
import './formComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const FormComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [skills, setSkills] = useState([]);
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSkillChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!birthday) {
      errors.birthday = 'Birthday is required';
    }

    if (skills.length === 0) {
      errors.skills = 'At least one skill must be selected';
    }

    if (!country) {
      errors.country = 'Country is required';
    }

    if (!gender) {
      errors.gender = 'Gender is required';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (password !== rePassword) {
      errors.rePassword = 'Passwords do not match';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform form submission logic here
      // You can access the form data using the state variables (e.g., firstName, lastName, etc.)

      // Reset the form fields
      setFirstName('');
      setLastName('');
      setUsername('');
      setPhoneNumber('');
      setEmail('');
      setBirthday('');
      setSkills([]);
      setCountry('');
      setGender('');
      setAboutMe('');
      setPassword('');
      setRePassword('');
      setErrors({});
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}> 
      <label placeholder='Enter your first name'>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </label>
      <br />
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        {errors.username && <span className="error">{errors.username}</span>}
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <br />
      <label>
        Birthday:
        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        {errors.birthday && <span className="error">{errors.birthday}</span>}
      </label>
      <br />
      <label>
        Skills:
        <br />
        <label>
          <input
            type="checkbox"
            value="HTML"
            checked={skills.includes('HTML')}
            onChange={handleSkillChange}
          />{' '}
          HTML
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="CSS"
            checked={skills.includes('CSS')}
            onChange={handleSkillChange}
          />{' '}
          CSS
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="JavaScript"
            checked={skills.includes('JavaScript')}
            onChange={handleSkillChange}
          />{' '}
          JavaScript
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="C#"
            checked={skills.includes('C#')}
            onChange={handleSkillChange}
          />{' '}
          C#
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Python"
            checked={skills.includes('Python')}
            onChange={handleSkillChange}
          />{' '}
          Python
        </label>
        {errors.skills && <span className="error">{errors.skills}</span>}
      </label>
      <br />
      <label>
        Country:
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Australia">Australia</option>
          <option value="Japan">Japan</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </label>
      <br />
      <label>
        About Me:
        <textarea value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>
      <br />
      <label>
        Re-enter Password:
        <input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
        {errors.rePassword && <span className="error">{errors.rePassword}</span>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
