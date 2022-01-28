import { TailSpin } from  'react-loader-spinner';

function Loader () {
    return (
        <div className='Wrapper'>
            <TailSpin
                heigth="100"
                width="100"
                color='#3f51b5'
                ariaLabel='loading'
            />
        </div>
    );
};

export default Loader;