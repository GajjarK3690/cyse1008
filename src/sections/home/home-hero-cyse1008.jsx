import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExtendedEuclideanAlgorithm from "./components/extended-euclidean-algorithm"; // Correct Import

/** HomeHeroCYSE1008 Component */
export function HomeHeroCYSE1008() {
  const [count, setCount] = useState(0);  // State to track button clicks

  return (
    <div>
      <h1>Welcome to HomeHeroCYSE1008</h1>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          p: 3,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '1.5rem'
        }}
      >
        My Awesome Store
      </Box>

      {/* Button with Click Counter */}
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginTop: 2 }}
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </Button>

      {/* Integrating Extended Euclidean Algorithm Component */}
      <ExtendedEuclideanAlgorithm />
    </div>
  );
}
