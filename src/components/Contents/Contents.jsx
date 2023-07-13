import React, { useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import randomColor from '../../feature/randomColor';
import Button from '../common/Button';
import Modal from '../modal/Modal';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';
import useSystemModal from '../../feature/useSystemModal';
import SystemModal from '../modal/SystemModal';
import { useCookies } from 'react-cookie';
import api from '../../api/user';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/modules/userSlice';

const Contents = ({ posts, genre, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sysIsOpen, msg, setSysIsOpen] = useSystemModal();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const isLogin = useSelector((state) => state.user.is);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //  로그인 상태에서 쿠키를 직접 바꾸거나 삭제해도 공유하기 기능이 작동..
  // const curToken = cookies.token;
  // const checkToken = async (cur) => {
  //   try {
  //     const res = await api.get('/user', {
  //       headers: {
  //         Authorization: `Bearer ${cur}`,
  //       },
  //     });
  //     const { status } = res;
  //     if (status === 200) {
  //       console.log('in');
  //       dispatch(loginUser({ is: true }));
  //       return true;
  //     } else {
  //       dispatch(loginUser({ is: false }));
  //       removeCookie(['token']);
  //       setIsOpen(false);
  //       setSysIsOpen(true, '로그인이 필요합니다');
  //       return false;
  //     }
  //   } catch (error) {
  //     dispatch(loginUser({ is: false }));
  //     removeCookie(['token']);
  //     navigate('/signin');
  //     setSysIsOpen(true, '로그인이 필요합니다');
  //     setIsOpen(false);
  //     return false;
  //   }
  // };

  const isOpenToggleHandler = () => {
    if (
      // checkToken(curToken)
      isLogin
    ) {
      setIsOpen((prev) => !prev);
    } else {
      setSysIsOpen(true, '로그인이 필요합니다');
      removeCookie(['token']);
      navigate('/signin');
    }
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <ContentsLayout>
      <h2 style={{ fontSize: '0px' }}>{genre ? genre : 'home'}</h2>
      <ShareBox>
        <Button
          size={'small'}
          bc={'#222'}
          fc={'#fff'}
          fnc={isOpenToggleHandler}>
          공유하기
        </Button>
      </ShareBox>
      <ContentsList>
        {posts
          .toReversed()
          .filter((post) => (genre ? post.genre === genre : post))
          .map((post) => {
            return (
              <ContentsItem
                key={post.id}
                onClick={() =>
                  navigate(`/detail/${post.id}`, { state: { post: post } })
                }>
                <ContentsArtist>{post.artist}</ContentsArtist>
                <ContentsTitle>{post.title}</ContentsTitle>
                <HashBox>
                  {post.hash.map((tag) => {
                    return <Hash key={shortid.generate()}>{tag}</Hash>;
                  })}
                </HashBox>
              </ContentsItem>
            );
          })}
      </ContentsList>
      {isOpen && <Modal fnc={isOpenToggleHandler} />}
      {sysIsOpen && (
        <SystemModal isOpenHandler={setSysIsOpen} msg={msg} login={true} />
      )}
    </ContentsLayout>
  );
};

export default Contents;

const ContentsLayout = styled.section`
  width: 100%;

  /* lv4에만 적용 */
  padding-top: 100px;
  @media only screen and (max-width: 1024px) {
    padding-top: 60px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 40px;
  }
`;
const ShareBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 80%;
  margin: 0 auto;
`;
const ContentsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 80%;
  margin: 20px auto 0;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ContentsItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const ContentsArtist = styled.h3`
  color: #222;
  font-size: 18px;
  font-family: 'NanumBarunGothicBold';
`;
const ContentsTitle = styled.h4`
  color: #222;
  font-size: 16px;
  font-family: 'NanumBarunGothic';
`;
const HashBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Hash = styled.span`
  color: #222;
  font-family: 'NanumBarunGothicLight';
  padding: 3px;
  border-radius: 5px;
  background-color: ${() => randomColor()};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;
`;
