import { connect } from 'react-redux';

import { setRandomParticipant } from '../../actions/participants';

import RouletteButton from '../components/rouletteButton';

export default connect(
    null,
    {
        setRandomParticipant,
    },
)(RouletteButton);
