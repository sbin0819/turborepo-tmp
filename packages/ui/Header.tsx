import React from 'react';
import Link from 'next/link';
import { tables } from './Table/sample';

import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <StyledLink href="/table">Home</StyledLink>
            {Object.keys(tables).map((el) => (
                <StyledLink key={el} href={`/table/${el}`}>
                    {el.replace(/\b[a-z]/, (letter) => letter.toUpperCase())}
                </StyledLink>
            ))}
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 100%;
    gap: 1.5rem;
`;

const StyledLink = styled(Link)`
    color: #3b82f6;
    font-size: 1.5rem;
    line-height: 2rem;
    cursor: pointer;
`;
