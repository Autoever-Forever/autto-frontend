import React, { useEffect, useState } from 'react';
import { Box, CustomCalendar, Title } from './CalendarStyle';
import moment from 'moment';
import useProducts from 'states/useProducts';
import { useQuery } from '@tanstack/react-query';
import { GetDetailProduct } from 'apis/product/GetDetailProduct';

function Calendar() {
  const { uuid, setSelectDate } = useProducts();
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [maxDate, setMaxDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(null);

  // 공연 상세 정보 가져오기
  const { data } = useQuery({
    queryKey: ['product', uuid],
    queryFn: () => GetDetailProduct(uuid)
  });

  useEffect(() => {
    if (data?.data) {
      // 공연 시작일과 종료일 설정
      setMinDate(new Date(data.data.performStartDate));
      setMaxDate(new Date(data.data.performEndDate));
    }
  }, [data]);

  // 선택 가능한 날짜인지 확인하는 함수
  const tileDisabled = ({ date }: { date: Date }) => {
    return date < minDate || date > maxDate;
  };

  // 날짜 선택 시 처리
  const handleDateChange = (value: Date) => {
    setSelectedDate(value);
    const formattedDate = moment(value).format('YYYY-MM-DD');
    setSelectDate(formattedDate);
  };

  // 날짜 타일의 클래스 이름 설정
  const tileClassName = ({ date }: { date: Date }) => {
    if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
      return 'selected-date';
    }
    return null;
  };

  return (
    <Box>
      <Title>관람일</Title>
      <CustomCalendar
        onChange={handleDateChange}
        value={selectedDate || minDate}
        minDate={minDate}
        maxDate={maxDate}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
        formatDay={(locale, date) => moment(date).format('D')}
      />
    </Box>
  );
}

export default Calendar;
