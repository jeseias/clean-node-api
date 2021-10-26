import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/accounts'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { map, MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = await accountCollection.findOne({ _id: result.insertedId })

    return map(account)
  }
}
