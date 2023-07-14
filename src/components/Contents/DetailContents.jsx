import React, { useState } from 'react';
import { styled } from 'styled-components';
import RandomColor from '../../feature/randomColor';
import shortid from 'shortid';
import YouTubePlayer from '../youtube/YouTubePlayer';
import Dots from '../dots/Dots';
import useSystemModal from '../../feature/useSystemModal';
import SystemModal from '../modal/SystemModal';
import Modal from '../modal/Modal';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../api/post';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DetailContents = ({ post }) => {
  const { isLoading, data } = useQuery(['posts'], getPosts);
  const matchPost = data.find((a) => a.id === post.id);
  const { title, artist, hash, linkUrl, password } = matchPost;

  const [systemIsOpen, msg, isOpenHandler] = useSystemModal();
  const [input, setInput] = useState(true);
  const [type, setType] = useState('');
  const [editIsOpen, setEditIsOpen] = useState(false);

  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user);

  if (isLogin.is === false) {
    navigate('/signin');
  }

  const controlPost = (value, type) => {
    if (type === 'cancle') {
      isOpenHandler(false, '비밀번호를 입력해 주세요');
      return false;
    }
    if (password !== value) {
      isOpenHandler(true, '비밀번호가 틀립니다');
      return false;
    }
    if (type === 'edit') {
      isOpenHandler(false);
      setEditIsOpen(true);
    }
    if (type === 'delete') {
      isOpenHandler(true, '정말 삭제하시겠습니까?');
      setInput(false);
    }
  };

  const editIsOpenToggleHandler = () => {
    setEditIsOpen((prev) => !prev);
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <DetailContentsLayout>
      <h2 style={{ fontSize: '0px' }}>{title + ' 상세페이지'}</h2>
      <DetailInfoBox>
        <DetailInfoHeader>
          <DetailTitle>{title}</DetailTitle>
          <Dots
            post={matchPost}
            isOpenHandler={isOpenHandler}
            setType={setType}
            setInput={setInput}
          />
        </DetailInfoHeader>
        <DetailArtist>{artist}</DetailArtist>
        <HashBox>
          {hash.map((tag) => {
            return <Hash key={shortid.generate()}>{tag}</Hash>;
          })}
        </HashBox>
        <YouTubePlayerBox>
          <YouTubePlayer linkUrl={linkUrl} />
        </YouTubePlayerBox>
      </DetailInfoBox>
      {systemIsOpen && (
        <SystemModal
          msg={msg}
          input={input}
          isOpenHandler={isOpenHandler}
          controlPost={controlPost}
          type={type}
          id={matchPost.id}
        />
      )}
      {editIsOpen && <Modal fnc={editIsOpenToggleHandler} post={matchPost} />}
    </DetailContentsLayout>
  );
};

export default DetailContents;

const DetailContentsLayout = styled.section`
  width: 100%;
  padding-top: 60px;
`;
const DetailInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;
const DetailInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f26419;
`;
const DetailTitle = styled.h3`
  font-size: 20px;
  font-family: 'NanumBarunGothicBold';
  line-height: 1.3;
`;
const DetailArtist = styled.p`
  font-size: 18px;
  font-family: 'NanumBarunGothic';
  line-height: 1.2;
  border-bottom: 1px solid #f26419;
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
  background-color: ${() => RandomColor()};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;
`;
const YouTubePlayerBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 640px;
`;
