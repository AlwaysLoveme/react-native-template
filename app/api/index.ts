import axios from '@/shared/axios';

export function test() {
  const res = axios({
    method: 'get',
    url: 'https://www.kuaidi100.com/query',
    params: {
      type: 'yuantong',
      postid: '111111',
    },
  });
  return res;
}
