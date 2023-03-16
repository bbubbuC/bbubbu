
import { executeQuery } from './db';

const handler = async (req, res) => {
  // DESC(내림차순), ASC(오름차순)
  const { method, body } = req;

  const seletData = async () => {
    try {
      let data = await executeQuery('select * from bbu', []);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  }
  
  const insertData = async () => {
    let {communityId, user, likeB} = body;
    console.log(body)
    let data = await executeQuery(
      'insert into bbu (communityId, user, likeB) values (?, ?, ?)',
      [Number(communityId), user, Number(likeB)]
    );
    res.send('success')
    return data;
  };
  

                                                                  
  switch (method) {
    case "GET": await seletData(); break;
    case "POST": await insertData(); break;
  }
}

export default handler;