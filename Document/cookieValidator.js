async function cookieValidator(cookies){
    try{
        await externallyValidateCookie(cookies.testCookie)
    }catch{
        throw new Error('invalid cookies')
    }
}