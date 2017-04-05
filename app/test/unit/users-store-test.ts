import * as chai from 'chai'
const expect = chai.expect

import { Account } from '../../src/models/account'
import { Email } from '../../src/models/email'
import { AccountsStore } from '../../src/shared-process/users-store'
import { InMemoryStore } from '../in-memory-store'

describe('UsersStore', () => {
  let usersStore: AccountsStore | null = null
  beforeEach(() => {
    usersStore = new AccountsStore(new InMemoryStore(), new InMemoryStore())
  })

  describe('adding a new user', () => {
    it('contains the added user', () => {
      const newUserLogin = 'tonald-drump'
      usersStore!.addUser(new Account(newUserLogin, '', '', new Array<Email>(), '', 1, ''))

      const users = usersStore!.getUsers()
      expect(users[0].login).to.equal(newUserLogin)
    })
  })
})
