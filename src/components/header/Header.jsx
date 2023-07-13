import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { useCookies } from 'react-cookie';
import api from '../../api/user';
import useSystemModal from '../../feature/useSystemModal';
import SystemModal from '../modal/SystemModal';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/modules/userSlice';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [isOpen, msg, isOpenHandler] = useSystemModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const curToken = cookies.token;
    const path = window.location.pathname;
    const checkToken = async (cur) => {
      try {
        if (cur === undefined) {
          if (path !== '/signin' && path !== '/signup') {
            navigate('/signin');
          }
        } else {
          const res = await api.get('/user', {
            headers: {
              Authorization: `Bearer ${cur}`,
            },
          });
          const { status } = res;
          if (status === 200) {
            setIsLogin(true);
            dispatch(loginUser({ is: true }));
          } else {
            setIsLogin(false);
            dispatch(loginUser({ is: false }));
            removeCookie(['token']);
            isOpenHandler(true, '로그인이 필요합니다');
          }
        }
      } catch (error) {
        setIsLogin(false);
        dispatch(loginUser({ is: false }));
        removeCookie(['token']);
        if (path !== '/signin' && path !== '/signup') {
          navigate('/signin');
          isOpenHandler(true, '로그인이 필요합니다');
        }
      }
    };
    checkToken(curToken);
  }, []);

  const logout = () => {
    setIsLogin(false);
    dispatch(loginUser({ is: false }));
    removeCookie(['token']);
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
          {isLogin ? (
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
