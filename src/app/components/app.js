import './app.scss';

import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';

//Components
import Header from './header/header';
import SearchComponent from '../../components/searchComponent/searchComponent';
import ListOfParticipants from '../../components/listOfParticipants/listOfParticipants';
import LoadListContainer from '../../loadListByCommas/';
import SelectedCard from '../../components/selectedCard/selectedCard';
import UploadFile from '../../components/uploadFile/uploadFile';

const app = ({
    fileUpload,
    onClickRouletteButton,
    participants,
    removeParticipant,
    selectedParticipant,
}) => {
    const nameSelectedParticipant = selectedParticipant === null ? null : selectedParticipant.name;

    return (
        <div className='app'>
            <Header />
            <div className='row app__container'>
                <div className='col-md-5'>
                    <LoadListContainer />
                </div>
                <div className='col-md-2 app__or'>OR</div>
                <div className='col-md-5'>
                    <UploadFile onFileUpload={fileUpload} />
                </div>
                <div className='col-md-12'>
                    <SearchComponent onHandleModifyValue={onClickRouletteButton} />
                    {!isEqual(selectedParticipant, null) && (
                        <SelectedCard
                            selectedParticipant={selectedParticipant}
                            removeParticipant={removeParticipant}
                        />
                    )}
                    {participants && (
                        <ListOfParticipants
                            participants={participants}
                            valueSeleted={nameSelectedParticipant}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

app.propTypes = {
    fileUpload: PropTypes.func.isRequired,
    onClickRouletteButton: PropTypes.func.isRequired,
    participants: PropTypes.array,
    removeParticipant: PropTypes.func.isRequired,
    selectedParticipant: PropTypes.object,
};

app.defaultProps = {
    selectedParticipant: null,
};

export default app;
