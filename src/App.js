import './App.css';
import Header from './components/header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm({name:'',email:''});
  }
  const removeItem = (index)=>{
    let arr =data;
    arr.splice(index, 1);
    setData([...arr]);
  }
  return (
    <div className="App">

      <Header />

      {/* form input */}
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField value={form.name} onChange={(event) => {
            setForm({...form,name:event.target.value})
          }}
            id="outlined-basic" label="name" variant="outlined" />
          <TextField value={form.email} onChange={(event) => {
            setForm({...form,email:event.target.value})
          }}
            id="outlined-basic" label="email" variant="outlined" />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* data output from form */}
      <div className='data'>
        <div className='dataField'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>

        {
          data.map((element, index) => {
            return (
              <div className='dataField'>
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Button onClick={()=>removeItem(index)} variant="contained" color="error"><DeleteIcon /></Button>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
