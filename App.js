const heading = document.createElement('h1');
    heading.innerHTML = 'Hello Asim from JS';
    const root = document.getElementById('root');
    root.appendChild(heading);

    const h1 = React.createElement('h1', {
        id: 'h1'
    }, 'Hello Asim from React and createElement');
    // console.log(h1);
    const reactRoot = ReactDOM.createRoot(document.getElementById('react-root'));
    reactRoot.render(h1);