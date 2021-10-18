import { EmailValidatorAdaptor } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdaptor => {
  return new EmailValidatorAdaptor()
}

describe('EmailValidator Adaptor', () => {
  test('Should return false if validator return false ', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email')
    expect(isValid).toBe(false)
  })

  test('Should return true if validator return true ', () => {
    const sut = makeSut()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email ', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('invalid_email@mail.com')
    expect(isEmailSpy).toHaveBeenCalledWith('invalid_email@mail.com')
  })
})
