# 내일배움캠프 React LV 5 

2023.07.03 ~ 2023.07.14 LV 5

## 프로젝트 소개

✔︎ 자신이 좋아하는 노래를 공유할 수 있는 사이트
✔︎ mock 서버를 이용하여 JWT사용

## 기술스택
<div align=left>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

## 구현기능

- 회원가입
- 로그인
- 로그아웃
- 게시글 작성
- 게시글 조회
- 게시글 수정
- 게시글 삭제

## API 명세

|    기능      | URL          | Method  | request                                | response                                       |
| ------------ | ------------ | ------- | ---------------------------------------------------------------------------------------- |--------------------------- |
| 게시글 조회  | /posts       | GET     |                                       | [ {"id": id, "artist": "artist", "title": "title","genre": "genre","password": "password","linkUrl": "linkUrl","hash": []} ] |
| 게시글 작성  | /posts       | POST    |  {"id": id, "artist": "artist", "title": "title","genre": "genre","password": "password","linkUrl": "linkUrl","hash": []}   |     |
| 게시글 수정  | /posts/id    | PATCH   |    {"id": id, "artist": "artist", "title": "title","genre": "genre","password": "password","linkUrl": "linkUrl","hash": []}    |     |
| 게시글 삭제  | /posts/id    | DELETE  |         {id}                   |    |
