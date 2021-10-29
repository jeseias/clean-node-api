import { DbAddAccount } from '../../data/usecases/db-add-account/db-add-account'
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdaptor } from '../../utils/email-validator-adaptor'

export const makeSignUpController = (): SignUpController => {
  const salt = 12

  const emailValidatorAdaptor = new EmailValidatorAdaptor()
  const encryptAdaptor = new BcryptAdapter(salt)
  const addAccountRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(encryptAdaptor, addAccountRepository)

  return new SignUpController(emailValidatorAdaptor, dbAddAccount)
}
