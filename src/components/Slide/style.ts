import styled from 'styled-components'

export const Aside = styled.div`
  overflow:scroll;
  padding:10px;
 
  width:200px;
  font-size:16px;
  /* height:100%; */
  /* background-color: #000; */
  border-right:1px solid #E1E1E1;
  .active{
    font-size:18px;
    font-weight:700;
    .active-item{
      border-radius:5px;
      background-color: #F6F6F7;
    }
  }
  .select-list{
    .title{
      font-size:14px;
      color:#999999;
      margin: 15px 0;
      margin-left:5px;
    }
    .select-item{
        width:100%;
        height:30px;
        line-height:30px;
        margin:5px 0;
        &:hover{
          background-color: #F6F6F7;
        }
        .active{
          font-size:18px;
          font-weight:700;
          .active-item{
            border-radius:5px;
            background-color: #F6F6F7;
          }
        }
        .item{
          padding:0 5px;
        }
    }
  }
`