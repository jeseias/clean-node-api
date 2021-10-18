import { EmailValidatorAdaptor } from './email-validator'

describe('EmailValidator Adaptor', () => {
  test('Should return false if validator return false ', () => {
    const sut = new EmailValidatorAdaptor()
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })

  test('Should return true if validator return false ', () => {
    const sut = new EmailValidatorAdaptor()
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })
})
