import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BinFormData, BinResponse, BinState } from '@/types/bin';
import { createBin } from '@/services/api';

const initialState: BinState = {
   loading: false,
   error: null,
   currentSlug: null,
};

export const submitBin = createAsyncThunk<BinResponse, BinFormData>(
   'bin/submit',
   async (formData, { rejectWithValue }) => {
      try {
         const response = await createBin(formData);
         return response;
      } catch (error) {
         if (error instanceof Error) {
            return rejectWithValue(error.message)
         }
         return rejectWithValue("Failed to create bin")
      }
   }
);

const binSlice = createSlice({
   name: 'bin',
   initialState,
   reducers: {
      clearError: (state) => {
         state.error = null;
      },
      clearSlug: (state) => {
         state.currentSlug = null;
      },
      resetBinState: (state) => {
         state.loading = false;
         state.error = null;
         state.currentSlug = null;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(submitBin.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(submitBin.fulfilled, (state, action: PayloadAction<BinResponse>) => {
            state.loading = false;
            state.currentSlug = action.payload.slug || null;
            state.error = null;
         })
         .addCase(submitBin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
         });
   },
});

export const { clearError, clearSlug, resetBinState } = binSlice.actions;
export default binSlice.reducer;