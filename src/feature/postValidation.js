const postValidation = (postInfo, isOpenHanler, pwInputOutline) => {
  const { title, artist, linkUrl, genre, hash, password } = postInfo;

  if (!genre) {
    isOpenHanler(true, '국내 또는 해외를 선택해 주세요');
    return false;
  }
  if (!title) {
    isOpenHanler(true, '제목을 적어주세요');
    return false;
  }
  if (!artist) {
    isOpenHanler(true, '가수를 적어주세요');
    return false;
  }
  if (!linkUrl) {
    isOpenHanler(true, '링크를 적어주세요');
    return false;
  }
  if(!pwInputOutline) {
    isOpenHanler(true, '비밀번호 형식을 확인해 주세요');
    return false;
  }
  const hashNum = hash.length;
  if (hashNum < 3) {
    isOpenHanler(true, '해시태그는 최소 3개입니다');
    return false;
  }
  const hashCheck = hash.filter((h) => {
    return h === '#';
  });
  if (hashCheck.length !== 0) {
    isOpenHanler(true, '해시태그는 1글자 이상 입력해 주세요');
    return false;
  }
  return true;
};

export default postValidation;
