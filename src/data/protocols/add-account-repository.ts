import { AccountModel } from '../../domain/models/accounts'
import { AddAccountModel } from '../../domain/usecases/add-account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
