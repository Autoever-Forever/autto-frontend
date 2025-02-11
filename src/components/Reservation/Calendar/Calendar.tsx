import React, { useEffect, useState } from 'react';
import { 
  CalendarBox, 
  DateBox, 
  DateText, 
  DayBox, 
  DayText, 
  Title,
  MonthText 
} from './CalendarStyle';
import useProducts from 'states/useProducts';
import { useQuery } from '@tanstack/react-query';
import { GetInventoryProduct } from 'apis/product/GetInventoryProduct';

function Calendar() {
  const { uuid, setSelectDate } = useProducts();
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>();
  const [currentMonth, setCurrentMonth] = useState<string>('');

  // 공연 날짜 정보 가져오기
  const { data } = useQuery({
    queryKey: ['dates', uuid],
    queryFn: () => GetInventoryProduct(uuid),
    enabled: !!uuid,
  });

  // 달력에 표시할 날짜들 생성
  const generateCalendarDays = () => {
    if (!data?.data || data.data.length === 0) return [];

    // 첫 번째 공연 날짜를 기준으로 달력 생성
    const firstDateStr = data.data[0].date;
    // UTC 시간을 로컬 시간으로 변환
    const firstDate = new Date(firstDateStr.replace('T', ' '));
    
    // 해당 월의 첫날과 마지막 날 계산
    const startDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), 1);
    const endDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 0);
    
    const days = [];
    
    // 첫 주의 시작 요일까지 빈 날짜 추가
    for (let i = 0; i < startDate.getDay(); i++) {
      days.push({ date: '', day: i, available: false });
    }

    // 해당 월의 날짜들 추가
    for (let date = 1; date <= endDate.getDate(); date++) {
      const currentDate = new Date(firstDate.getFullYear(), firstDate.getMonth(), date);
      // ISO 문자열로 변환할 때 시간대 고려
      const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
      
      days.push({
        date: dateString,
        day: currentDate.getDay(),
        available: availableDates.includes(dateString)
      });
    }

    return days;
  };

  useEffect(() => {
    if (data?.data) {
      // 날짜 문자열을 로컬 시간으로 변환하여 저장
      const dates = data.data.map(item => {
        const date = new Date(item.date.replace('T', ' '));
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      });
      setAvailableDates(dates);

      if (dates.length > 0) {
        const firstDate = new Date(data.data[0].date.replace('T', ' '));
        setCurrentMonth(`${firstDate.getFullYear()}년 ${firstDate.getMonth() + 1}월`);
      }
    }
  }, [data]);

  const handleDateClick = (date: string) => {
    if (date) {
      setSelectedDate(date);
      setSelectDate(date);
    }
  };

  return (
    <CalendarBox>
      <Title>날짜 선택</Title>
      <MonthText>{currentMonth}</MonthText>
      <DayBox>
        <DayText>일</DayText>
        <DayText>월</DayText>
        <DayText>화</DayText>
        <DayText>수</DayText>
        <DayText>목</DayText>
        <DayText>금</DayText>
        <DayText>토</DayText>
      </DayBox>
      <DateBox>
        {generateCalendarDays().map((day, index) => (
          <DateText
            key={index}
            onClick={() => day.available && handleDateClick(day.date)}
            selected={selectedDate === day.date}
            available={day.available}
            day={day.day}
            empty={!day.date}
          >
            {day.date ? parseInt(day.date.split('-')[2]) : ''}
          </DateText>
        ))}
      </DateBox>
    </CalendarBox>
  );
}

export default Calendar;
