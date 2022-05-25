import { AxiosError } from 'axios';
import { createBrowserHistory } from 'history'


//export const history = createHashHistory()

export const history = createBrowserHistory()

export function serializeQueryParams( obj: any ) {
  return '?' + Object.keys(obj).reduce(function(a: any, k: any){
    if(obj[k] !== null && obj[k] !== undefined) {
      a.push(k + '=' + encodeURIComponent(obj[k]))
    }
    return a;
  }, []).join('&');
}


export function getErrorFromHttpResponse(error: AxiosError): string {
  const errorData: any = error?.response?.data;
  if(errorData?.errors) {
    const errorObjs = errorData.errors
    const errors = Object.keys(errorObjs).map(key => errorObjs[key])
    return errors[0]
  } else {
    return errorData?.message
  }
}