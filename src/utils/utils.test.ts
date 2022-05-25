import { AxiosError } from 'axios'
import React from 'react'
import { serializeQueryParams, getErrorFromHttpResponse } from './common-helper'

const errorsResponse: AxiosError = new AxiosError()
errorsResponse.response = {
  data: {errors: {name: 'Name is required!'}},
  status: 500,
  statusText: 'Internal Server Error',
  headers: {},
  config: {},
  
}

describe('utils', () => {
  test('should return query string from object', () => {
    const queryObj = {
      name: 'John',
      branch_id: 1,
      country_code: null,
      status: false
    }
    expect(serializeQueryParams(queryObj)).toBe('?name=John&branch_id=1&status=false')
  })

  test('Get First Error From Api Error Response Errors', () => {
    expect(getErrorFromHttpResponse(errorsResponse)).toBe('Name is required!')
  })

})