import { EmailValidatorAdaptor } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adaptor', () => {
  test('Should return false if validator return false ', () => {
    const sut = new EmailValidatorAdaptor()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email')
    expect(isValid).toBe(false)
  })

  test('Should return true if validator return true ', () => {
    const sut = new EmailValidatorAdaptor()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email ', () => {
    const sut = new EmailValidatorAdaptor()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('invalid_email@mail.com')
    expect(isEmailSpy).toHaveBeenCalledWith('invalid_email@mail.com')
  })
})
