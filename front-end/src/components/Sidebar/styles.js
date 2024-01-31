import styled from "styled-components"
import Calendar from 'react-calendar'

export const Container = styled.div`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    padding: 2rem;
    font-family: 'Nunito', sans-serif;

    background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_200};

    > h2 {
        font-size: 2rem;

    }
`

export const StyledCalendar = styled(Calendar)`

    * {
        font-family: 'Nunito', sans-serif;
        font-size: 1.4rem;
    }
/* ~~~ general styles ~~~ */
  max-width: 400px;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1.5rem;;
  border-radius: 1rem;;

 /* ~~~ navigation styles ~~~ */
 .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
      
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.35;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    
  }

  /* ~~~ button styles ~~~ */
  button {
    margin: 4px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;
    border-radius: 100%;
    color: black;
    padding: 4px 0;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_300};
        cursor: pointer;
    }

    &:active {
        background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_300};
    }

    &:focus {
        background-color: ${({ theme }) => theme.COLORS.BG_ORANGE_300};
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.3;
  }
  .react-calendar__month-view__days {
    column-gap: px;
  }


   /* ~~~ active day styles ~~~ */
   .react-calendar__tile--range {
      box-shadow: 0 0 5px 2px gray;
  }

   /* ~~~ other view styles ~~~ */
   .react-calendar__year-view__months, 
  .react-calendar__decade-view__years, 
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

`

