import { rest } from "msw";

const hongsiList = () => {
  return rest.get("/hong-si", async (req, res, ctx) => {
    return res(
      ctx.json([
        {
        hongsi_id: 1,
        title:"미라클 모닝 같이해요",
        startDate :"2022-10-13",
        endDate:"2022-10-13",
        image:"https://placebear.com/640/360",
        tags:[{tag:"운동"},{tag:"자기개발"},{tag:"운동"}],
        category:2,
        currentParticipant:1,
        maxParticipant:3,
      },
      {
        hongsi_id: 2,
        title:"하이욤 여러분~",
        startDate :"2022-10-13",
        endDate:"2022-10-13",
        image:"https://placebear.com/640/360",
        tags:[{tag:"운동"},{tag:"자기개발"},{tag:"운동"}],
        category:1,
        currentParticipant:1,
        maxParticipant:10,
      },
      {
        hongsi_id: 3,
        title:"같이 런닝뛰실 분?",
        startDate :"2022-10-13",
        endDate:"2022-10-13",
        image:"https://placebear.com/640/360",
        tags:[{tag:"운동"},{tag:"자기개발"},{tag:"운동"}],
        category:3,
        currentParticipant:1,
        maxParticipant:15,
      },
    ])
    );
  });
};

export const hongsiDetail = (number) => {
    return rest.get(`/hong-si/${number}`, async (req, res, ctx) => {
      console.log(req)
      return res(
        ctx.json(
          { 
            title:"미라클 모닝 같이해요",
            content :"미라클 모닝 같이할 사람 구해요~ 맨날 밤낮 바뀐 부엉이처럼 살았는데 이번기회에 같이 바꾸실분 구합니다",
            image:"https://placebear.com/640/360",
            tags:[
                {tag:"운동"},
                {tag:"자기개발"},
                {tag:"몸통"},
                ],
            category:1,
            startDate :"2022-10-13",
            endDate:"2022-10-13",
            currentParticipant: 3,
            maxParticipant :15,
            writer: 1
          }
          
        )
      );
    });
  };

export default hongsiList;
