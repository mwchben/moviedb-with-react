//import default
import React from 'react';

//import images
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

//import styles
import { Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';

//functional component since they have states
const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt='rmdb-logo'></LogoImg>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'></TMDBLogoImg>
        </Content>
    </Wrapper>
)

export default Header;

