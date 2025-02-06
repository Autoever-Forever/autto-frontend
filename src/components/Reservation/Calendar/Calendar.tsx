import React, { useEffect, useState } from 'react';
import { Box, CustomCalendar, Title } from './CalendarStyle';
import moment from 'moment';
import useProducts from 'states/useProducts';

function Calendar() {
  const { setSelectDate } = useProducts();

  return (
    <Box>
      <Title>관람일</Title>
      <CustomCalendar
        defaultValue={new Date()}
        onChange={(value: Date) => {
          const formattedDate = moment(value).format('YYYY-MM-DD');
          setSelectDate(formattedDate);
        }}
        formatDay={(locale, date) => moment(date).format('D')}
      />
    </Box>
  );
}

export default Calendar;
