import React, { useState } from 'react';
import {
  Box,
  CntInfo,
  CustomSelect,
  ErrorText,
  InfoWrapper,
  Label,
  Title,
  TotalInfo,
  Value,
  Wrapper,
} from './SelectStyle';
import moment from 'moment';

function Select() {
  const [totalSelect, setTotalSelect] = useState(0);
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

  return (
    <Box>
      <Title>관람 인원 선택</Title>
      <CntInfo>오후 6시 00분 공연</CntInfo>
      <CntInfo>잔여 좌석 : 6석</CntInfo>
      <Wrapper>
        <CustomSelect
          placeholder='0매'
          options={options}
          onChange={(e) => {
            setTotalSelect(e.value);
          }}
        />
        {totalSelect && totalSelect > 6 ? (
          <ErrorText>예매티켓 수가 부족합니다.</ErrorText>
        ) : null}
      </Wrapper>
      <TotalInfo>
        <InfoWrapper>
          <Label>선택된 좌석 수</Label>
          <Value>{totalSelect}석</Value>
        </InfoWrapper>
        <InfoWrapper>
          <Label>결제 금액</Label>
          <Value>150,000원</Value>
        </InfoWrapper>
      </TotalInfo>
    </Box>
  );
}

export default Select;
