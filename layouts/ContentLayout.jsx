import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    /* margin-top: -20px; */
    padding: 0 0;
`;

const ContentLayout = ({children}) => {
    return (
        <Wrap>
            {children}
        </Wrap>
    )
}

export default ContentLayout
