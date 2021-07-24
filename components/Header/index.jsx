import React from 'react'
import { Wrapper, Logo, RightMenu, SearchBar, Li, Ul, SearchWrapper } from './header.style'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <Wrapper>
            <Logo>Hello</Logo>
            <Ul> 
                <Li>
                    <Link href="#">
                        Home
                    </Link>
                </Li>
                <Li>
                    <Link href="#">
                        Browse
                    </Link>
                </Li>
                <Li>
                    <Link href="#">
                        Movies
                    </Link>
                </Li>
                <Li>
                    <Link href="#">
                        TV Shows
                    </Link>
                </Li>
                <Li>
                    <Link href="#">
                        Watchlist
                    </Link>
                </Li>
                <Li>
                    <Link href="#">
                        Genres
                    </Link>
                </Li>
            </Ul>
            <RightMenu>
                <SearchWrapper>
                    <FaSearch color="grey"/>
                    <SearchBar placeholder="Search"/>
                </SearchWrapper>
            </RightMenu>
        </Wrapper>
    )
}

export default Header
