import { createReducer, on } from "@ngrx/store";
import { decrementar, incrementar, multiplicar, dividir } from "./contador.actions";

export const initialState = 20;

export const contadorReducer = createReducer(
  initialState,
  on(incrementar, state => state + 1),
  on(decrementar, state => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero)
);
