// function MainContent() {
//     return (
//         <ul className="main-content" ><li>Here is one list item</li></ul>
//     )
// }

// multiple ways to get elements to the dom

const navbar = (
    <nav>
        <h1>Here is my header!!</h1>
        <ul>
            <li>Pricing!</li>
            <li>About!</li>
            <li>Contact!</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar
, document.querySelector("#root"))

// ReactDOM.render(
//     <div>
// <MainContent />
// </div>
// , document.querySelector("#root"))