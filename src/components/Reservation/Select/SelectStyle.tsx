import Select from 'react-select';
import styled from 'styled-components';

export const Box = styled.div`
  padding: 2rem;
  width: 50%;
  padding: 5%;
`;
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2rem;
`;
export const CntInfo = styled.div`
  font-size: 1rem;
  text-align: left;
  line-height: 2rem;
`;
export const CustomSelect = styled(Select)`
  margin-top: 3rem;
  width: 70%;
  text-align: center;
`;
export const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-top: 4rem;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  font-weight: bold;
  width: 60%;
  margin-bottom: 1rem;
`;
export const Label = styled.div`
  width: 50%;
  font-size: 1rem;
  text-align: left;
`;
export const Value = styled.div`
  width: 50%;
  font-size: 1rem;
  text-align: right;
  color: var(--text-red);
`;

export const ErrorText = styled.text`
  color: red;
  margin-top: 1rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
