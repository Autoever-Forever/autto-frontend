import React, { useState } from 'react';
import { Box, CustomCalendar, Title } from './CalendarStyle';
import moment from 'moment';

function Calendar() {
  const [selectDate, setSelectDate] = useState(new Date());
  return (
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
  );
}

export default Calendar;
