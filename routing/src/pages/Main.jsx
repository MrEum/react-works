import mainPhoto from '../assets/hero.png'

const Main = () => {

    return(
        <div>
            <h2>환영합니다</h2>
            <div>
                <img src={mainPhoto} alt="메인 이미지" />
            </div>
        </div>
    )
}
export default Main;