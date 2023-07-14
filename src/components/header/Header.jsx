import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import api from '../../api/user';
import useSystemModal from '../../feature/useSystemModal';
import SystemModal from '../modal/SystemModal';
import { useDispatch, useSelector } from 'react-redux';
import { __checkToken, signoutUser } from '../../redux/modules/userSlice';

const Header = () => {
  const user = useSelector((state) => state.user);
  const [isOpen, msg, isOpenHandler] = useSystemModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__checkToken());
  }, []);

  const logout = () => {
    dispatch(signoutUser());
    navigate('/signin');
  };

  return (
    <HeaderLayout>
      <LogoBox>
        <Logo onClick={() => navigate('/')}>#Music</Logo>
      </LogoBox>
      <Nav>
        <NavList>
          <NavItem onClick={() => navigate('/')}>홈</NavItem>
          <NavItem onClick={() => navigate('/internal')}>국내</NavItem>
          <NavItem onClick={() => navigate('/abroad')}>해외</NavItem>
        </NavList>
      </Nav>
      <UserBox>
        <SignBox>
          {user.is ? (
            <Sign onClick={logout}>Log Out</Sign>
          ) : (
            <>
              <Sign onClick={() => navigate('/signin')}>Sign In</Sign>
              <Sign onClick={() => navigate('/signup')}>Sign Up</Sign>
            </>
          )}
        </SignBox>
      </UserBox>
      {isOpen && <SystemModal isOpenHandler={isOpenHandler} msg={msg} />}
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #fff;
`;
const LogoBox = styled.div`
  width: 120px;
  text-align: center;
  color: #f26419;
`;
const Logo = styled.h1`
  cursor: pointer;
  font-family: 'NanumBarunGothic';
  font-size: 24px;
  line-height: 1.2;
`;
const Nav = styled.nav`
  width: 50%;
  text-align: center;
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
`;
const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const NavItem = styled.li`
  cursor: pointer;
  width: 10%;
  height: 40px;
  padding-top: 11px;
  font-size: 18px;
  font-weight: 500;
  font-family: 'NanumBarunGothic';
  &:hover {
    border-bottom: 2px solid #f26419;
  }
  @media only screen and (max-width: 1024px) {
    width: 15%;
  }
  @media only screen and (max-width: 768px) {
    width: 20%;
  }
`;
const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100%;
`;
const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70px;
  height: 64px;
`;
const Sign = styled.span`
  cursor: pointer;
  font-family: 'NanumBarunGothic';
  font-size: 15px;
  line-height: 1.2;
  padding: 5px;
  &:hover {
    border-left: 2px solid #f26419;
  }
`;
