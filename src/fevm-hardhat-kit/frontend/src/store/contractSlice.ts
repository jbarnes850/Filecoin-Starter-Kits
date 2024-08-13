import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContractState {
  address: string | null;
  abi: any | null;
}

const initialState: ContractState = {
  address: null,
  abi: null,
};

const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setContract: (state, action: PayloadAction<ContractState>) => {
      state.address = action.payload.address;
      state.abi = action.payload.abi;
    },
  },
});

export const { setContract } = contractSlice.actions;
export default contractSlice.reducer;