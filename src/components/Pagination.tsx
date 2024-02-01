
import { Group } from '@mantine/core';

const Pagination = () => {
  return (
    <Group style={{gap: 6}}>
      <div style={{backgroundColor:"#8c8c8c", width: 8, height: 8 , borderRadius: "50%"}}/>
      <div style={{backgroundColor:"#bfbfbf", width: 6, height: 6 , borderRadius: "50%"}}/>
      <div style={{backgroundColor:"#d9d9d9", width: 3, height: 3 , borderRadius: "50%"}}/>
    </Group>
  );
};

export default Pagination;
