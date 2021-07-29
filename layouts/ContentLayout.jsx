import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    /* margin-top: -20px; */
    padding: 0 0;
    overflow-x: hidden;
`;

const ContentLayout = ({children, style}) => {
    return (
        <Wrap style={style}>
            {children}
        </Wrap>
    )
}

export default ContentLayout
