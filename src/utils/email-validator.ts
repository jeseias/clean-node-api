import { EmailValidator } from '../presentation/protocols/email-validator'

export class EmailValidatorAdaptor implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
