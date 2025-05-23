import React, { useEffect, useState } from 'react';
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
import { useQuery } from '@tanstack/react-query';
import useProducts from 'states/useProducts';
import { GetInventoryProduct } from 'apis/product/GetInventoryProduct';

interface selectProps {
  totalSelect?: number;
  setTotalSelect?: (value: number) => void;
  seatId: string;
  setSeatId?: (value: string) => void;
}

function Select({
  totalSelect,
  setTotalSelect,
  seatId,
  setSeatId,
}: selectProps) {
  const { uuid, selectDate } = useProducts();
  const { data } = useQuery({
    queryKey: ['dates', uuid],
    queryFn: () => GetInventoryProduct(uuid),
  });

  const [inventory, setInventory] = useState<any>(null);
  const { setTitle, setSeatCnt } = useProducts();

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
    { value: 10, label: '10매' }
  ];

  useEffect(() => {
    if (data?.data && selectDate) {
      const dateData = data.data.filter((date: any) => {
        return date.date.includes(selectDate);
      });
      
      if (dateData.length > 0) {
        setInventory(dateData[0]);
        setSeatId(dateData[0].seatId);
        setTitle(dateData[0].title);
      } else {
        setInventory(null);
      }
    }
  }, [selectDate, data]);

  console.log(seatId);

  if (!inventory) {
    return (
      <Box>
        <Title>관람 인원 선택</Title>
        <p style={{ textAlign: 'center', color: '#666' }}>
          선택하신 날짜의 공연 정보가 없습니다.<br />
          다른 날짜를 선택해주세요.
        </p>
      </Box>
    );
  }

  return (
    <>
      <Box>
        <Title>관람 인원 선택</Title>
        <CntInfo>선택한 날짜: {selectDate}</CntInfo>
        <CntInfo>잔여 좌석: {inventory.inventory}석</CntInfo>
        <Wrapper>
          <CustomSelect
            placeholder="0매"
            options={options}
            onChange={(e) => {
              setTotalSelect(e.value);
              setSeatCnt(e.value);
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
            <Value>
              {(totalSelect * inventory.price)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              원
            </Value>
          </InfoWrapper>
        </TotalInfo>
      </Box>
    </>
  );
}

export default Select;
