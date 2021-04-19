import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width:100%;
  min-width:1100px;
  height:70px;
  background-color:#EC4141;
  position:fixed;
  top:0;
  .wrapper{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 20px;
    
  }

`
export const HeaderLeft = styled.div`
      width:520px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      .logo{
        width:179px;
        height:70px;
        line-height:70px;
        background-position: 0 0;
        cursor: pointer;
        a{
          display:block;
          width: 157px;
          height: 100%;
        }
      }
      .user-behavior{
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        .user-control{
          /* line-height:100%;
           */
          i{
            display:inline-block;
            width:24px;
            height:24px;
            border-radius:50%;
            background-color:#E63F3F;
            line-height:24px;
            margin:0 10px;
          }
        }
        .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover{
          border:none;
        }
        .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused{
          border:none;
          box-shadow:none;
        }
        .search{
          width:170px;
          border-radius:20px;
          background-color: #E13E3E;
          border:none;
          .ant-input{
            background-color: #E13E3E;
            &::placeholder{
              color:#E76464;
            }
          }
        }
      }
    
`