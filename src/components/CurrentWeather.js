import style from './currentWeather.module.scss'
const CurrentWeather = () => {
    return (
        <div className={style.container}>
            <img src={`https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`} />
        </div>
    );
}

export default CurrentWeather;