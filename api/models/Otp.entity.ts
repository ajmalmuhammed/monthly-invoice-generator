import { Entity, Column } from 'typeorm'
import StandardEntity from './Standard-entity'
import { CreateOTPInput } from './Otp.interface'
import { isString } from 'util'
import { isStringObject } from 'util/types'

@Entity()
export class Otp extends StandardEntity {
  @Column({ type: 'varchar' })
  code: string

  @Column({})
  expiresAt: Date

  @Column()
  used: boolean

  prepareToCreate(input: CreateOTPInput) {
    this.code = input.code
    this.expiresAt = input.expiresAt
    this.used = false
  }
}
