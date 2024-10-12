import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface modalState {
  modals: { [key: string]: boolean }
}

const initialState: modalState = { 
  modals: {}
}

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      if (state.modals[action.payload] !== undefined) {
        document.body.style.overflow = 'hidden';
        state.modals[action.payload] = true;
      }
    },
    closeModal: (state, action: PayloadAction<string>) => {
      if (state.modals[action.payload] !== undefined) {
        document.body.style.overflow = 'auto';
        state.modals[action.payload] = false;
      }
    },
    addModal: (state, action: PayloadAction<string>) => {
      if (state.modals[action.payload] === undefined) {
        state.modals[action.payload] = false;
      }
    }
  },
})

export const { openModal, closeModal, addModal } = modalsSlice.actions
export default modalsSlice.reducer