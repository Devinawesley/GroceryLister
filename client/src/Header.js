import './CSS/Header.css'
const Header = ()=>{
    return(
        <div className="header">
            <a href="./" class="logo">Grocery Lister</a>
            <div className="header-right">
                <a className="active" href="./recipes">Recipes</a>
                <a href="#contact">test</a>
                <a href="./login">Login</a>
            </div>
        </div>
    )
}
export default Header