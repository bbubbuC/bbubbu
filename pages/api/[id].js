import { executeQuery } from './db';

const handler = async (req, res) => {

  const { method, body, query } = req;

  //insert
  const seletDataId = async () => {
    try{
        let data = await executeQuery(
          'select * from community where id=?', [query.id]
        )
        res.json(data)
    }catch(err){
        res.send(err)
    }
  }

  //업데이트
  const updateDataId = async () => {
    try{
        let { nickname, text, date } = body;
        let data = await executeQuery(
          'update community set nickname=?,text=? where id=?',
          [nickname, text, Number(query.id)]
        )
        res.json(data)
    }catch(err){
        res.send(err);
    }
  }
  //삭제
  const deleteData = async () => {
    let data = await executeQuery(
      'delete from community where id=?', [query.id]
    )
    res.json(data);
  }
  switch (method) {
    case "GET": seletDataId(); break;
    case "PUT": updateDataId(); break;
    case "DELETE": deleteData(); break;
  }
}
export default handler;
