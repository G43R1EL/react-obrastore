import './Container.css';

function Container ({content}) {
    return (
        <>
            <div className='container'>
                {content}
            </div>
        </>
    );
}

export default Container;