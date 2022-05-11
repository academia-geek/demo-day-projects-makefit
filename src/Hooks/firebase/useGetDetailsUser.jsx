import { getAuth } from "firebase/auth";
import md5 from 'md5';

export const getDetailsUser = async (setUser, setProvider, setImage, setVerified) => {
    const user = await getAuth().currentUser;
    const provider = user.providerData[0].providerId;
    setUser(user)
    setProvider(provider)

    //INSERTAR IMAGEN DE PERFIL CON GRAVATAR
    const hash = md5(user.email)
    const gravatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`
    setImage(gravatar)
    
    //Usuario autenticado
    const isVerified = user.emailVerified
    setVerified(isVerified)
}