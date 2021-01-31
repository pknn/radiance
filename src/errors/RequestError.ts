import { ApplicationError } from '.';

interface Param {
  key: string,
  value: any
}

interface ParamError {
  params: Param[]
}

interface Field {
  key: string,
  value: string
}

interface FieldError {
  fields: Field[]
}

export const RequestParamsInvalid = (params: Param[]): ApplicationError | ParamError => ({
  error: 'REQ_PARAM_INVALID',
  errorMessage: 'Request Parameter Invalid',
  params,
});

export const RequestFieldInvalid = (fields: Field[])
: ApplicationError | FieldError => ({
  error: 'REQ_FIELD_INVALID',
  errorMessage: 'Request Field Invalid',
  fields,
});

export const RequestInvalid = (): ApplicationError => ({
  error: 'REQ_INVALID_ERR',
  errorMessage: 'Request Invalid',
});
