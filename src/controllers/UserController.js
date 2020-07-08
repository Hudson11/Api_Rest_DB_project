const userModel = require('../models/UserModel')
const data = require('../repo/data_10000');

class UserController {

  async create(req, res){
    await userModel.create(data).then(doc => {
        
    }, (reason) => {
      console.log(reason)
    })
    return res.json({})
  }

  async deleteAll(req, res){
    await userModel.deleteMany({}, (err) => {
      if(err)
        return res.json({ status: false, message: err })
      return res.json({ status: true, message: 'concluído'})
    })
  }

  async listUsers(req, res){
    await userModel.find((err, doc) => {
      if(err)
        return res.json({ status: false, message: err })
      return res.json(doc)
    }).select({_id: false})
  }

}

module.exports = new UserController()

