const service = require('../service/service');
const logger = console;
module.exports = {
  getHello: getHello
};

async function getHello(req, res) {
  try {
    const result = await service.getHello(req.query.name, req.query.age);
    return res.json(result);
  } catch (error) /* istanbul ignore next */ {
    logger.error(`getHello: Error while getHello: ${error}`);
  }
}
