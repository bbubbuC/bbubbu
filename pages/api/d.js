
import { executeQuery } from './db';

const handler = async (req, res) => {
  // DESC(내림차순), ASC(오름차순)
  const { method, body } = req;

  const seletData = async () => {
    try {
      let data = await executeQuery('select * from d order by id DESC', []);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  }

  switch (method) {
    case "GET": seletData(); break;
    // case "POST": insertData(); break;
  }
}

export default handler;
