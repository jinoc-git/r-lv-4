const editPostValidation = (target, isOpenHandler) => {
  const [_, internal, abroad, title, artist, linkUrl, hash] = target;

  if (!internal.checked && !abroad.checked) {
    isOpenHandler(true, '국내 또는 해외를 선택해 주세요');
    return false;
  }
  if (!title.value) {
    isOpenHandler(true, '제목을 적어주세요');
    return false;
  }
  if (!artist.value) {
    isOpenHandler(true, '가수를 적어주세요');
    return false;
  }
  if (!linkUrl.value) {
    isOpenHandler(true, '링크를 적어주세요');
    return false;
  }
  const AllHash = hash.value.split(' ').filter((h) => h !== '');
  if (AllHash.length < 3) {
    isOpenHandler(true, '해시태그는 최소 3개입니다');
    return false;
  }
  const hashCheck = AllHash.filter((h) => h === '#');
  if (hashCheck.length !== 0) {
    isOpenHandler(true, '해시태그는 1글자 이상 입력해 주세요');
    return false;
  }
  return true;
};

export default editPostValidation;
