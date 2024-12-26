import React, { useState } from 'react';
import {
  Box,
  CntInfo,
  CustomCalendar,
  CustomSelect,
  InfoWrapper,
  ReservationBox,
  SubInfo,
  Title,
  TotalInfo,
  Wrapper,
  Label,
  Value,
  Button,
  ButtonBox,
  ErrorText,
} from './ReservationStyle';
import moment from 'moment';
import { useParams } from 'react-router-dom';

function Reservation() {
  const { id } = useParams();
  const [selectDate, setSelectDate] = useState(new Date());
  const [totalSelct, setTotalSelect] = useState();
  const options = [
    { value: 1, label: '1매' },
    { value: 2, label: '2매' },
    { value: 3, label: '3매' },
    { value: 4, label: '4매' },
    { value: 5, label: '5매' },
    { value: 6, label: '6매' },
    { value: 7, label: '7매' },
    { value: 8, label: '8매' },
    { value: 9, label: '9매' },
  ];

  // /product/id 페이지에서 저장하고 있는 react-query 의 캐싱 값 가져와서 사용함

  const submitHandler = () => {
    // 예약 전송하는 api 연결
    // react-query 의 잔여석이 선택한 좌석 수 totalSelect 값 보다 큰 경우 추가 로직 처리
  };
  return (
    <Wrapper>
      <Title>뮤지컬 [시라노]</Title>
      <SubInfo>예술의 전당 CJ 토월 극장 | 2024.12.03 ~ 2025.02.23</SubInfo>
      <ReservationBox>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Box>
            <Title>관람일</Title>
            <CustomCalendar
              defaultValue={selectDate}
              onChange={(value: Date) => {
                setSelectDate(value);
              }}
              formatDay={(locale, date) => moment(date).format('D')}
            />
          </Box>
          <Box>
            <Title>관람 인원 선택</Title>
            <CntInfo style={{ marginTop: '2rem' }}>
              {moment(selectDate).format('YYYY년 MM월 DD일')}
            </CntInfo>
            <CntInfo>오후 6시 00분 공연</CntInfo>
            <CntInfo>잔여 좌석 : 6석</CntInfo>
            <Wrapper>
              <CustomSelect
                defaultInputValue="0매"
                options={options}
                onChange={(e) => {
                  setTotalSelect(e.value);
                }}
              />
              {totalSelct && totalSelct > 6 ? (
                <ErrorText>예매티켓 수가 부족합니다.</ErrorText>
              ) : null}
            </Wrapper>
            <TotalInfo>
              <InfoWrapper>
                <Label>선택된 좌석 수</Label>
                <Value>{totalSelct}석</Value>
              </InfoWrapper>
              <InfoWrapper>
                <Label>결제 금액</Label>
                <Value>150,000원</Value>
              </InfoWrapper>
            </TotalInfo>
          </Box>
        </div>
        <ButtonBox>
          <Button onClick={() => submitHandler()}>예약하기</Button>
        </ButtonBox>
      </ReservationBox>
    </Wrapper>
  );
}
export default Reservation;
