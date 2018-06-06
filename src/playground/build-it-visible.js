class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
            visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle </h1>
                <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                            <div> Hey, these details can be seen now!! </div>
                        )}
            </div>
        )
    }
} 

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// let visibility = false;

// const appRoot = document.getElementById('app');
// const app = {
//     title: 'Visibility Toggle',
//     // subtitle: 'This is new info',
//     // options: []
// }

// const showHide = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
// const template = (
// <div>
//     <h1> {app.title} </h1>
//     <button onClick={showHide}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//     {visibility && (
//         <div> Hey, these details can be seen now!! </div>
//     )}
    

// </div>
// )
// ReactDOM.render(template, appRoot);
// };

// render();


