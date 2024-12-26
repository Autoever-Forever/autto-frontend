import React, { useState } from 'react';
import {
  CategoryWrapper,
  Input,
  Label,
  Wrapper,
  Form,
  Button,
} from './JoinFormStyle';
function JoinForm() {
  const [userName, setUserName] = useState<string>();
  const [emailId, setEmailId] = useState<string>();
  const [emailCode, setEmailCode] = useState<string>();
  const [emailAvailable, setEmailAvailable] = useState<string>();
  const [userPassword, setUserPassword] = useState<string>();
  const [userPasswordCheck, setUserPasswordCheck] = useState<string>();

  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const submitHandler = () => {
    console.log('submit join');
  };

  const sendCode = () => {
    if (!emailRegExp.test(emailId)) {
      console.log('이메일 형식 불일치');
    } else {
      console.log('이메일 코드 전송');
    }
  };
  const checkCode = async () => {
    // 중복확인 api
    console.log('이메일 코드 확인');
    // 응답값 확인 - emailAvailable
  };

  const submitUser = () => {
    if (userName && emailAvailable && userPassword && userPasswordCheck) {
      if (userPassword !== userPasswordCheck) {
       return console.log('비밀번호가 일치하지 않습니다.');
      }
    } else {
      console.log('회원가입 정부 불충족');
    }
    return console.log('회원가입 정보 전송');
  };
  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <CategoryWrapper>
          <Label>이름</Label>
          <Input
            placeholder="이름"
            onChange={(e) => setUserName(e.target.value)}
          />
        </CategoryWrapper>
        <CategoryWrapper>
          <Label>이메일</Label>
          <Input
            placeholder="test@test.com"
            style={{ width: '50%' }}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <Button size="20%" onClick={() => sendCode()}>
            인증하기
          </Button>
        </CategoryWrapper>

        <CategoryWrapper>
          <Label style={{ visibility: 'hidden' }}>인증코드</Label>
          <Input
            placeholder="코드 입력"
            style={{ width: '50%' }}
            onChange={(e) => setEmailCode(e.target.value)}
          />
          <Button size="20%" onClick={() => checkCode()}>
            인증
          </Button>
        </CategoryWrapper>

        <CategoryWrapper>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </CategoryWrapper>
        <CategoryWrapper>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => setUserPasswordCheck(e.target.value)}
          />
        </CategoryWrapper>
        {userPassword && userPassword != userPasswordCheck ? (
          <p>비밀번호가 일치하지 않습니다.</p>
        ) : null}
        <Button type="submit" margin="5rem" onClick={() => submitUser()}>
          회원가입
        </Button>
      </Form>
    </Wrapper>
  );
}
export default JoinForm;
