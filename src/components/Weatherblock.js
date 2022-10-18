import style from './weatherBlock.module.scss'
const Weatherblock = ({weatherData, type}) => {

    if (type === 0) {
        return (
            <div className={style.container}>
                <div className={style.hourBlock}>
                    <h1 className={style.hour}>11</h1>
                    <h1 className={style.hourTemp}>101°</h1>
                </div>
            </div>
        )
    }
    if (type === 1) {
        return (
            <div className={style.container}>
                <div className={style.dayBlock}>
                    <h1 className={style.day}>Sat</h1>
                    <p className={style.high}>100°</p>
                    <hr />
                    <p className={style.low}>62°</p>
                </div>
            </div>
        );

    }
}

export default Weatherblock;