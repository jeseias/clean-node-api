import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('BcryptAdapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a hash n success', async () => {
    const sut = makeSut()
    const hashed = await sut.encrypt('any_value')
    expect(hashed).toBe('hash')
  })

  test('Should throw if Bcrypt throws', async () => {
    const sut = makeSut()
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(async () => new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.encrypt('any_value')
    await expect(promise).rejects.toThrow()
  })
})
