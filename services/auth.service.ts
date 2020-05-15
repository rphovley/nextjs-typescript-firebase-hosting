import axios from '../utils/axios'

export type SpotifyTokenResponse = {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  scope: string,
  token_type: string
}

export type SpotifyLoginUrlResponse = {
  url: string
}

type ApiResponse = {
  message: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

export const login = async (): Promise<SpotifyLoginUrlResponse> => {
  const res: ApiResponse = await axios.get('auth/login')
  return res.data as SpotifyLoginUrlResponse
}

export const getToken = async (code: string | string[]): Promise<SpotifyTokenResponse> => {
  const res: ApiResponse = await axios.get(`auth/redirect?code=${code}`)
  return res.data as SpotifyTokenResponse
}
