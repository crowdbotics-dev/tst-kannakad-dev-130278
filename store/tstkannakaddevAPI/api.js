import axios from "axios"
const tstkannakaddevAPI = axios.create({
  baseURL: "https://tst-kannakad-dev-130278.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return tstkannakaddevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_sedda_list(payload) {
  return tstkannakaddevAPI.get(`/api/v1/sedda/`)
}
function api_v1_sedda_create(payload) {
  return tstkannakaddevAPI.post(`/api/v1/sedda/`, payload)
}
function api_v1_signup_create(payload) {
  return tstkannakaddevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tstkannakaddevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstkannakaddevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tstkannakaddevAPI.patch(`/rest-auth/user/`, payload)
}
function api_docs_schema_retrieve(payload) {
  return tstkannakaddevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return tstkannakaddevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return tstkannakaddevAPI.post(`/rest-auth/logout/`)
}
function api_v1_sedda_retrieve(payload) {
  return tstkannakaddevAPI.get(`/api/v1/sedda/${payload.id}/`)
}
function api_v1_sedda_update(payload) {
  return tstkannakaddevAPI.put(`/api/v1/sedda/${payload.id}/`, payload)
}
function api_v1_sedda_partial_update(payload) {
  return tstkannakaddevAPI.patch(`/api/v1/sedda/${payload.id}/`, payload)
}
function api_v1_sedda_destroy(payload) {
  return tstkannakaddevAPI.delete(`/api/v1/sedda/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return tstkannakaddevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tstkannakaddevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_change_create(payload) {
  return tstkannakaddevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstkannakaddevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return tstkannakaddevAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return tstkannakaddevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_sedda_list,
  api_v1_sedda_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  api_v1_sedda_retrieve,
  api_v1_sedda_update,
  api_v1_sedda_partial_update,
  api_v1_sedda_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create
}
