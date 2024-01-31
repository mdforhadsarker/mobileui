// Header.tsx

import React, { ReactElement } from 'react';
import { Box, rem } from '@mantine/core';


interface HeaderProps {
    menuIcon: ReactElement;
    searchIcon: ReactElement;
    profileImage: ReactElement;
}

const Header: React.FC<HeaderProps> = ({ menuIcon, searchIcon, profileImage }) => {
    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: `${rem(25)} ${rem(25)}`,
                color: 'black',
                fontSize: rem(24),
                minWidth: 375,
                fontWeight: 'normal',
            }}
        >
            <div>{menuIcon}</div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                {searchIcon}
                {profileImage}
            </div>
        </Box>
    );
};

export default Header;
