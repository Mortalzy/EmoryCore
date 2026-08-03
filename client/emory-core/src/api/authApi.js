const DEFAULT_URL = 'http://localhost:5000'

const registrationApi = async (userData) => {
    try {
        const response = await fetch(`${DEFAULT_URL}/api/auth/register`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }
        )

        if(!response.ok) {
            console.error(`Мы попали в !response.ok в loginApi.js`);
            let errorData
            try {
                errorData = await response.json()
            } catch {
                errorData = { message: `${response.status}: ${response.statusText()}`}
            }

            return {
                ok: false,
                status: response.status,
                data: errorData
            }
        }

        const data = await response.json()

        return {
            ok: response.ok,
            status: response.status,
            data: data,
        }
    } catch (error) {
        return {
            ok: false,
            status: 500,
            data: data,
        }
    }  
}

const loginApi = async (userData) => {
    try {
        const response = await fetch(`${DEFAULT_URL}/api/auth/login`, 
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
        })

        //console.log(response)
        //console.log('---------------------');
        console.log(response.ok);

        if(!response.ok) {
            console.error(`Мы попали в !response.ok в loginApi.js`);
            let errorData
            try {
                errorData = await response.json()
            } catch {
                errorData = { message: `${response.status}: ${response.statusText()}`}
            }

            return {
                ok: false,
                status: response.status,
                data: errorData
            }
        }

        const data = await response.json()

        //console.log(data);

        return {
            ok: response.ok,
            status: response.status,
            data: data
        }
    } catch (error) {
        return {
            ok: False,
            status: 500,
            data: { message: "Ошибка в loginApi!"}
        }
    } 
}

export {
    registrationApi,
    loginApi
}