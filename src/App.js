import './App.css';
import { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';

function App() {
  const [singleSelections, setSingleSelections] = useState([]);

  const options = [
    {id: 1, name: "JavaScript"},
    {id: 2, name: "Java"},
    {id: 3, name: "Html"},
    {id: 4, name: "CSS"},
    {id: 5, name: "Tailwind"},
    {id: 6, name: "Bootstrap"},
  ]
  return (
    <div className='form-group'>
      <Typeahead 
         id="basic-typeahead-single"
         onChange={setSingleSelections}
         labelKey="name"
         options={options}
         selected={singleSelections}
         placeholder="Choose a technology..."
         renderMenuItemChildren={(option) => (
          <div style={{ display: 'block', marginBottom: '10px', textDecoration: 'none' }}>
            {option.name}
          </div>
        )} />
    </div>
  );
}

export default App;
