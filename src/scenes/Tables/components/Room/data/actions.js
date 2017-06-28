export const enteringRoom = (tableId) => {
  return { type: "ENTERING_ROOM", tableId: tableId };
}

export const takePotAction = (tableId, playerId) => {
  return { type: "TAKE_POT", tableId: tableId, playerId: playerId };
}

export const addChip = (tableId, playerId, amount) => {
  return { type: "ADD_CHIP", tableId: tableId, playerId: playerId, amount: amount };
}

export const checkAction = (tableId, playerId) => {
  return { type: "CHECK_ACTION", tableId: tableId, playerId: playerId };
}

export const foldAction = (tableId, playerId) => {
  return { type: "FOLD_ACTION", tableId: tableId, playerId: playerId };
}

export const callAction = (tableId, playerId) => {
  return { type: "CALL_ACTION", tableId: tableId, playerId: playerId };
}

export const betAction = (tableId, playerId, amount) => {
  return { type: "BET_ACTION", tableId: tableId, playerId: playerId, amount: amount };
}

export const playerActionReceived = (pot, game_hand_state, players, current_seat_no) => {
  return { type: "PLAYER_ACTION_RECEIVED", pot: pot, gameHandState: game_hand_state, currentSeatNo: current_seat_no, players: players };
}