import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  Initialized,
  OwnershipTransferred,
  Register,
  RegisterOrganization,
  UpdateOrganization
} from "../generated/DpidRegistry/DpidRegistry"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRegisterEvent(prefix: Bytes, entryId: BigInt): Register {
  let registerEvent = changetype<Register>(newMockEvent())

  registerEvent.parameters = new Array()

  registerEvent.parameters.push(
    new ethereum.EventParam("prefix", ethereum.Value.fromFixedBytes(prefix))
  )
  registerEvent.parameters.push(
    new ethereum.EventParam(
      "entryId",
      ethereum.Value.fromUnsignedBigInt(entryId)
    )
  )

  return registerEvent
}

export function createRegisterOrganizationEvent(
  prefix: Bytes,
  registrant: Address,
  tokenGate: Array<Address>
): RegisterOrganization {
  let registerOrganizationEvent = changetype<RegisterOrganization>(
    newMockEvent()
  )

  registerOrganizationEvent.parameters = new Array()

  registerOrganizationEvent.parameters.push(
    new ethereum.EventParam("prefix", ethereum.Value.fromFixedBytes(prefix))
  )
  registerOrganizationEvent.parameters.push(
    new ethereum.EventParam(
      "registrant",
      ethereum.Value.fromAddress(registrant)
    )
  )
  registerOrganizationEvent.parameters.push(
    new ethereum.EventParam(
      "tokenGate",
      ethereum.Value.fromAddressArray(tokenGate)
    )
  )

  return registerOrganizationEvent
}

export function createUpdateOrganizationEvent(
  prefix: Bytes,
  registrant: Address,
  tokenGate: Array<Address>
): UpdateOrganization {
  let updateOrganizationEvent = changetype<UpdateOrganization>(newMockEvent())

  updateOrganizationEvent.parameters = new Array()

  updateOrganizationEvent.parameters.push(
    new ethereum.EventParam("prefix", ethereum.Value.fromFixedBytes(prefix))
  )
  updateOrganizationEvent.parameters.push(
    new ethereum.EventParam(
      "registrant",
      ethereum.Value.fromAddress(registrant)
    )
  )
  updateOrganizationEvent.parameters.push(
    new ethereum.EventParam(
      "tokenGate",
      ethereum.Value.fromAddressArray(tokenGate)
    )
  )

  return updateOrganizationEvent
}
