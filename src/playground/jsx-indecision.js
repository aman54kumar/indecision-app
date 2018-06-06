console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'This is new info',
    options: []
}

 
const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptionApp();
    }
}
const appRoot = document.getElementById('app');

const removeAll = () => {
    app.options = [];
    renderOptionApp();
};

let renderOptionApp = () => {
let template = (
<div>
    <h1> {app.title} </h1>
    { app.subtitle && <p>{app.subtitle} </p>}
    {app.options.length>0? "Here are your options." : 'No options'}
    <p>{app.options.length}</p>
    <button onClick={removeAll}>Remove All</button>
     <ol>
        <li>First</li>
        <li>Second</li>
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button> Add Option </button>
        
    </form>
    {app.options.map((option) => {
            return <li key={option}>{option}</li>
    })
}

</div>
)
ReactDOM.render(template, appRoot);
};

renderOptionApp();


// ReactDOM.render(template, appRoot);