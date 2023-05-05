export const LOGIN_REGEXP: RegExp =
  /^(?![\W_|-]{1})(?!.*_-)(?!.*-_)(?!.*--)(?!.*__).[\w-]*(?<!.-|_)$/gi
export const PASSWORD_REGEXP: RegExp = /^(?=.*?[0-9])(?=.*?[A-Z]).*$/
