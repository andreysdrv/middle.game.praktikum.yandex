const baseUrl = '';

interface SignupData {

}

interface SigninData {
  
}

class AuthApi {

  private readonly baseUrl: string

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  private checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  public signup(signupData: SignupData) {
    const { } = signupData;
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        name: userName,
      }),
    })
    .then(this.checkResponse);
  }

  public signin(signinData: SigninData) {
    const {  } = signinData;
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })
    .then(this.checkResponse);
  }

}

export default new AuthApi(baseUrl);