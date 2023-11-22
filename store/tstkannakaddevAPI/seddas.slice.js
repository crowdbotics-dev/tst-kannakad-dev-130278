import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sedda_list = createAsyncThunk(
  "seddas/api_v1_sedda_list",
  async payload => {
    const response = await apiService.api_v1_sedda_list(payload)
    return response.data
  }
)
export const api_v1_sedda_create = createAsyncThunk(
  "seddas/api_v1_sedda_create",
  async payload => {
    const response = await apiService.api_v1_sedda_create(payload)
    return response.data
  }
)
export const api_v1_sedda_retrieve = createAsyncThunk(
  "seddas/api_v1_sedda_retrieve",
  async payload => {
    const response = await apiService.api_v1_sedda_retrieve(payload)
    return response.data
  }
)
export const api_v1_sedda_update = createAsyncThunk(
  "seddas/api_v1_sedda_update",
  async payload => {
    const response = await apiService.api_v1_sedda_update(payload)
    return response.data
  }
)
export const api_v1_sedda_partial_update = createAsyncThunk(
  "seddas/api_v1_sedda_partial_update",
  async payload => {
    const response = await apiService.api_v1_sedda_partial_update(payload)
    return response.data
  }
)
export const api_v1_sedda_destroy = createAsyncThunk(
  "seddas/api_v1_sedda_destroy",
  async payload => {
    const response = await apiService.api_v1_sedda_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const seddasSlice = createSlice({
  name: "seddas",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_sedda_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sedda_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sedda_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sedda_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sedda_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sedda_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sedda_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sedda_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_sedda_list,
  api_v1_sedda_create,
  api_v1_sedda_retrieve,
  api_v1_sedda_update,
  api_v1_sedda_partial_update,
  api_v1_sedda_destroy,
  slice: seddasSlice
}
