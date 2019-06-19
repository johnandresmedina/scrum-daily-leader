import './app.scss';

import React from 'react';

//Components
import Header from './header/header';
import LoadList from '../../loadList';
import UploadFile from '../../uploadFile/containers/uploadFile';
import RouletteButton from '../../rouletteButton/containers/rouletteButton';
import SelectedParticipant from '../../participants/containers/selectedParticipant';
import Participants from '../../participants/containers/participants';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <div className='row app__container'>
                <div className='col-md-5'>
                    <LoadList />
                </div>
                <div className='col-md-2 app__or'>OR</div>
                <div className='col-md-5'>
                    <UploadFile />
                </div>
                <div className='col-md-12'>
                    <RouletteButton />
                    <SelectedParticipant />
                    <Participants />
                </div>
            </div>
        </div>
    );
};

export default App;
