import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { collection, addDoc, getDocs,deleteDoc, doc } from 'firebase/firestore';
import { TextField, Button,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Box, Typography } from '@mui/material';
import { CircularProgress } from '@mui/material';

import {db} from '../firebase-config';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Laptop = () => {
    const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState('');
  const [processor, setProcessor] = useState('');
  const [laptops, setLaptops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Firestore collection reference
  const laptopsCollectionRef = useMemo(() => collection(db, 'laptops'), []);
const fetchLaptops = useCallback(async () => {
    setIsLoading(true); // Start loading
    try {
      const data = await getDocs(laptopsCollectionRef);
      setLaptops(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Failed to fetch laptops:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  }, [laptopsCollectionRef]);
  

  useEffect(() => {
    fetchLaptops();
  }, [fetchLaptops]); 
  
  const handleOpen = () => setOpen(true); // Function to open the modal
  const handleClose = () => setOpen(false); // Function to close the modal

  const addLaptop = async () => {
    setIsLoading(true); // Start loading
    try {
      await addDoc(laptopsCollectionRef, { name, type, company, price, processor });
      handleClose();
      setName('');
        setType('');
        setCompany('');
        setPrice('');
        setProcessor('');
      await fetchLaptops(); // Refresh the list
    } catch (error) {
      console.error("Failed to add laptop:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  
  const deleteLaptop = async (id) => {
    setIsLoading(true); // Start loading
    try {
      const laptopDoc = doc(db, 'laptops', id);
      await deleteDoc(laptopDoc);
      await fetchLaptops(); // Refresh the list
    } catch (error) {
      console.error("Failed to delete laptop:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div>
        {isLoading ? (
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
             <CircularProgress />
           </div>
        ): (
            <>
            
      <Button onClick={handleOpen}>Add Laptop</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-laptop-modal"
        aria-describedby="add-laptop-modal-description"
      >
        <Box sx={style}>
          <Typography id="add-laptop-modal" variant="h6" component="h2">
            Add a New Laptop
          </Typography>
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="dense" />
          <TextField label="Type" value={type} onChange={(e) => setType(e.target.value)} fullWidth margin="dense" />
          <TextField label="Company" value={company} onChange={(e) => setCompany(e.target.value)} fullWidth margin="dense" />
          <TextField label="Price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth margin="dense" />
          <TextField label="Processor" value={processor} onChange={(e) => setProcessor(e.target.value)} fullWidth margin="dense" />
          <Button onClick={addLaptop} style={{ marginTop: '20px' }}>Submit</Button>
          <Button onClick={handleClose} style={{ marginTop: '20px' }}>Cancel</Button>
        </Box>
      </Modal>

       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Processor</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {laptops.map((laptop) => (
            <TableRow
              key={laptop.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {laptop.name}
              </TableCell>
              <TableCell align="right">{laptop.type}</TableCell>
              <TableCell align="right">{laptop.company}</TableCell>
              <TableCell align="right">{laptop.price}</TableCell>
              <TableCell align="right">{laptop.processor}</TableCell>
              <TableCell align="right">
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteLaptop(laptop.id)}
                >
                    Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </>
        )}

    </div>
  );
};

export default Laptop;
