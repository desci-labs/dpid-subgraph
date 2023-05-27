import {
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Register as RegisterEvent,
  RegisterOrganization as RegisterOrganizationEvent,
  UpdateOrganization as UpdateOrganizationEvent
} from "../generated/DpidRegistry/DpidRegistry"
import {
  Initialized,
  OwnershipTransferred,
  Register,
  RegisterOrganization,
  UpdateOrganization
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegister(event: RegisterEvent): void {
  let entity = new Register(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prefix = event.params.prefix
  entity.entryId = event.params.entryId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegisterOrganization(
  event: RegisterOrganizationEvent
): void {
  let entity = new RegisterOrganization(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prefix = event.params.prefix
  entity.registrant = event.params.registrant
  entity.tokenGate = event.params.tokenGate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateOrganization(event: UpdateOrganizationEvent): void {
  let entity = new UpdateOrganization(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prefix = event.params.prefix
  entity.registrant = event.params.registrant
  entity.tokenGate = event.params.tokenGate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
