import qs from 'qs';
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from 'axios';

const cancelTokenSources = new Map(); // 定义cancel队列
const request: AxiosInstance = axios.create({
  // baseURL: process.env.BASE_HTTP,
  timeout: 20000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

const handlerRequest = async (config: AxiosRequestConfig) => {
  if (!(config.data instanceof FormData) && config.method === 'post') {
    config.data = qs.stringify(config.data);
  }

  if (!config.hasOwnProperty('cancelToken')) {
    // 排除不需要cancel的请求
    const source = axios.CancelToken.source();
    cancelTokenSources.set(source.token, source.cancel); // 加入cancel队列
    config.cancelToken = source.token;
  }
  return config;
};
const handlerResponse = (res: AxiosResponse) => {
  const data = res.data;
  if (res.config.cancelToken) {
    cancelTokenSources.delete(res.config.cancelToken);
  }
  return data;
};
const handlerError = (err: AxiosError) => {
  if (axios.isCancel(err)) {
    return cancelTokenSources.delete(err.message);
  }
};

request.interceptors.request.use(handlerRequest, handlerError);
request.interceptors.response.use(handlerResponse, handlerError);

export default request;
export {cancelTokenSources};
