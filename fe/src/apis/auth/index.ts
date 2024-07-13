import API from '..';
import { GetKakaoInfoRequestDto, GetKakaoTokenReqeustDto, LoginRequestDto } from './types';

/**
 *  카카오 token 발급 API
 */
export const getKakaoTokenApi = async ({ code }: GetKakaoTokenReqeustDto) => {
  return API.post(
    `https://kauth.kakao.com/oauth/token`,
    {
      grant_type: 'authorization_code',
      client_id: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
      redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
      code,
    },
    {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    },
  );
};

/**
 *  카카오 유저 정보 조회 API
 */
export const getKakaoInfoApi = async ({ accessToken }: GetKakaoInfoRequestDto) => {
  return await API.post(
    'https://kapi.kakao.com/v2/user/me',
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    },
  );
};

/**
 *  로그인 API
 */
export const loginApi = async ({ uuid, nickname }: LoginRequestDto) => {
  return await API.post(
    '/auth/login',
    {
      uuid,
      nickname,
    },
    {
      withCredentials: true,
    },
  );
};

/**
 *  토큰 재발급 API
 */
export const refreshTokenApi = async () => {
  return await API.get('/auth/refresh', {
    withCredentials: true,
  });
};
