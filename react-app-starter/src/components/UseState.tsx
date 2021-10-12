import { useState } from "react"

interface AuthUserTypes{
    name : string;
    email : string;
}


export const UseState = () => {

    const [ isLogin, setIsLogin ] = useState(false) //By default TypeScript Assign Type of boolean to isLogin
    const [ user , setUser ] = useState<AuthUserTypes | null>(null) //types is AuthUser or null

    const [ user , setUser ] = useState<AuthUserTypes>({} as AuthUserTypes) //if you are sure that variable will be initialize soon after setup use this syntaxe that evit to check if var is null or not

    return(
        <div></div>
    )
}