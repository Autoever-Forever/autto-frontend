import React, { useEffect, useState } from 'react';
import { CategoryWrapper, Input, Label, Form, Button, InputWrapper, ErrorMessage, SuccessMessage } from './JoinFormStyle';
import { ErrorText, Wrapper } from 'components/CommonStyle';
import { PostEmail } from 'apis/user/PostEmail';
import { PostEmailCheck } from 'apis/user/PostEmailCheck';
import { useFormState } from 'react-dom';
import { PostSignUp } from 'apis/user/PostSignUp';
import { userInfo } from 'os';
import useInfo from 'states/Variable';
import { useNavigate } from 'react-router-dom';
import useProducts from 'states/useProducts';

function JoinForm() {
  const naviagtor = useNavigate();

  const [name, setName] = useState<string>();
  const [emailId, setEmailId] = useState<string>();
  const [emailCode, setEmailCode] = useState<string>();
  const [emailAvailable, setEmailAvailable] = useState<boolean>();
  const [userPassword, setUserPassword] = useState<string>();
  const [userPasswordCheck, setUserPasswordCheck] = useState<string>();

  const { setUserName, setUserEmail } = useInfo((state) => state);
  const { setSuccess } = useProducts();
  const formData = new FormData();

  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // form 제출
  const submitHandler = () => {};

  // 이메일 코드 전송
  const sendCode = async () => {
    if (!emailRegExp.test(emailId)) {
      alert('이메일 형식이 일치하지 않습니다. 다시 작성해주세요.');
    } else {
      try {
        const res = await PostEmail(emailId);
        if (res.result) {
          alert(
            '이메일 코드를 전송했습니다. 이메일 확인 후 코드를 입력해주세요.',
          );
        } else {
          alert(
            '이메일 전송에 실패하였습니다. 이메일 확인 후 다시 요청해주세요.',
          );
        }
        return;
      } catch (err) {
        console.log(err);
        return;
      }
    }
  };
  // 이메일 코드값 확인
  const checkCode = async () => {
    try {
      const res = await PostEmailCheck(emailId, emailCode);
      if (res.result) {
        alert('코드 인증이 완료되었습니다.');
        setEmailAvailable(true);
      } else {
        alert('유효한 코드가 아닙니다. 코드를 다시 확인한 후 입력해주세요.');
      }
      return;
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const submitUser = async () => {
    if (userPassword !== userPasswordCheck) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
    if (userPassword == null) {
      return alert('비밀번호를 입력해주세요.');
    }
    if (!emailAvailable) {
      return alert('이메일 코드 인증을 진행해주세요.');
    }
    if (!name) {
      return alert('사용자 이름을 입력해주세요.');
    }

    try {
      const res = await PostSignUp(
        name,
        emailId,
        emailCode,
        userPassword,
        userPasswordCheck,
      );

      if (res.result) {
        setUserName(res.data.name);
        setUserEmail(res.data.email);
        setSuccess('signUp');
        naviagtor('/success');
      } else {
        return alert('회원가입에 실패하였습니다. 다시 진행해주세요.');
      }
    } catch (err) {
      return alert('회원가입에 실패하였습니다.' + err);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <CategoryWrapper>
          <Label>이름</Label>
          <Input 
            placeholder="이름을 입력해주세요" 
            onChange={(e) => setName(e.target.value)} 
          />
        </CategoryWrapper>

        <CategoryWrapper>
          <Label>이메일</Label>
          <InputWrapper>
            <Input
              placeholder="example@email.com"
              style={{ flex: 1 }}
              onChange={(e) => setEmailId(e.target.value)}
            />
            <Button
              type="button"
              size="120px"
              available={emailRegExp.test(emailId)}
              onClick={sendCode}
            >
              인증코드 전송
            </Button>
          </InputWrapper>
        </CategoryWrapper>

        <CategoryWrapper>
          <Label>인증코드</Label>
          <InputWrapper>
            <Input
              placeholder="인증코드 6자리"
              style={{ flex: 1 }}
              onChange={(e) => setEmailCode(e.target.value)}
            />
            <Button
              type="button"
              size="120px"
              available={emailCode && emailCode.length > 0}
              onClick={() => checkCode()}
            >
              확인
            </Button>
          </InputWrapper>
          {emailAvailable && (
            <SuccessMessage>이메일 인증이 완료되었습니다.</SuccessMessage>
          )}
        </CategoryWrapper>

        <CategoryWrapper>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </CategoryWrapper>

        <CategoryWrapper>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={(e) => setUserPasswordCheck(e.target.value)}
          />
          {userPassword && userPassword !== userPasswordCheck && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </CategoryWrapper>

        <Button
          type="button"
          margin="2rem 0 0 0"
          padding="1rem"
          fontSize="1rem"
          available={
            name &&
            emailId &&
            emailCode &&
            emailAvailable &&
            userPassword &&
            userPassword === userPasswordCheck
          }
          onClick={() => submitUser()}
        >
          회원가입
        </Button>
      </Form>
    </Wrapper>
  );
}

export default JoinForm;
