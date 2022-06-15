import styled from "styled-components";

export const StyledWrapper = styled.div`
  .form-container {
    display: flex;
    align-items: center;
    background: #9ac0fa;
    padding: 24px;
    border-radius: 12px;

    & > div {
      flex: 1 1 50%;
    }

    .form-wrapper {
      max-width: 360px;
    }

    .header {
      font-weight: bold;
      font-size: 48px;
      line-height: 1.4;
      color: hsl(216deg 91% 32%);
      span {
        display: block;
      }
    }
  }
  .list-container {
    padding-top: 32px;

    .title {
      font-weight: 600;
      color: #363b43;
    }

    .sorter-wrapper {
      margin-right: 12px;
    }

    .list {
      padding-top: 16px;
    }
  }

  @media screen and (max-width: 992px) {
    .form-container {
      .header {
        font-size: 45px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .form-container {
      display: block;
      text-align: center;
      .header {
        white-space: nowrap;
        span {
          display: inline;
        }
        font-size: 36px;
      }
      .form-wrapper {
        margin: 0 auto;
      }
    }

    .sorter-wrapper {
      display: none;
    }
  }

  @media screen and (max-width: 450px) {
    .form-container {
      .header {
        font-size: 28px;
      }
    }
  }
`;
