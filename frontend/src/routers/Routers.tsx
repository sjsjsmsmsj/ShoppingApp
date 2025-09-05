import MainScreen from './MainScreen.tsx'
import AuthScreen from './AuthScreen.tsx'

const Routers = () => {
    return (
        <div>
            {1 < 2 ? <AuthScreen /> : <MainScreen />}
        </div>
    )
}

export default Routers
