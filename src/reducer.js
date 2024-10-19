export const initialState = {
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  field: ["", "", "", "", "", "", "", "", ""],
  winner: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_PLAYER":
      return {
        ...state,
        currentPlayer: payload,
      };

    case "SET_FIELD": {
      const { currentPlayer, index } = payload;
      const newField = [...state.field];
      newField[index] = currentPlayer;

      return {
        ...state,
        field: newField,
      };
    }

    case "SET_STATUS_GAME_END":
      return {
        ...state,
        isGameEnded: payload,
      };

    case "SET_WINNER":
      return {
        ...state,
        winner: payload,
      };

    case "SET_STATUS_GAME_DRAW":
      return {
        ...state,
        isDraw: payload,
      };

    case "RESTART_GAME":
      return initialState;

    default:
      return state;
  }
};
