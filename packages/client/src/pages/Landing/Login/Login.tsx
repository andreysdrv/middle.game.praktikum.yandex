import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function Login () {

    useEffect(() => {
        console.log('component did mount');
        return () => {
            console.log('component will unmount')
        }
    }, []);

    return (
        <main>
        <form>
          <h1>Залогинься</h1>
          <fieldset>
            <label>E-mail</label>
            <input
              type="email"
              name="userEmail"
            >
            </input>
            <label>Пароль</label>
            <input
              type="password"
              name="password"
            >
            </input>
          </fieldset>
          <button
            type="submit"
          >
            Войти
          </button>
          <p>
              Еще не зерегистрированы?
              <Link to="/signup">Регистрация</Link>
          </p>
        </form>
      </main>
    );
}

export default Login;