
import '../styles/Pagination.module.css'; // Import your CSS file for styling
import { Group } from '@mantine/core';

const Pagination = () => {
  return (
    <Group style={{gap: 6}}>
      <div style={{backgroundColor:"#8c8c8c", width: 12, height: 12 , borderRadius: "50%"}}/>
      <div style={{backgroundColor:"#bfbfbf", width: 8, height: 8 , borderRadius: "50%"}}/>
      <div style={{backgroundColor:"#d9d9d9", width: 5, height: 5 , borderRadius: "50%"}}/>
    </Group>
  );
};

export default Pagination;
