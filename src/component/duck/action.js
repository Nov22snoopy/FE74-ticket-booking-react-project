import { CHAIR_BOOKING, DELETE, PURCHASE } from "./type"

export const ChairBookingAction = (payload) =>{
  return {
    type: CHAIR_BOOKING,
    payload //obj literal
  }
}

export const ChairPurchaseAction = () =>{
  return {
    type: PURCHASE,
  }
}

export const DeleteBooking = (payload) =>{
  return {
    type: DELETE,
    payload
  }
}
