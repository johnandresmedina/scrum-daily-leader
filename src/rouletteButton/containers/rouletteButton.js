import { connect } from 'react-redux';

import { setRandomParticipant } from '../../participants/actions';

import RouletteButton from '../components/rouletteButton';

export default connect(
    null,
    {
        setRandomParticipant,
    },
)(RouletteButton);
