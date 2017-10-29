import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PokerChip from './components/PokerChip';
import './style.css';

const ChipAmountControlContainer = ({ incrementBetSize }) => (
  <div className="chipFieldContainer">
    <div style={{ width: '18%', height: '100%', margin: '1%' }}>
      <PokerChip chipSize={25} onTouchTap={() => incrementBetSize(25)} />
    </div>
    <div style={{ width: '18%', height: '100%', margin: '1%' }}>
      <PokerChip chipSize={100} onTouchTap={() => incrementBetSize(100)} />
    </div>
    <div style={{ width: '20%' }} />
    <div style={{ width: '18%', height: '100%', margin: '1%' }}>
      <PokerChip chipSize={500} onTouchTap={() => incrementBetSize(500)} />
    </div>
    <div style={{ width: '18%', height: '100%', margin: '1%' }}>
      <PokerChip chipSize={1000} onTouchTap={() => incrementBetSize(1000)} />
    </div>
  </div>
)

ChipAmountControlContainer.propTypes = {
  playerOnTurn: PropTypes.object.isRequired,
  operatingPlayer: PropTypes.object,
  incrementBetSize: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => { return {} }
const mapDispatchToProps = (dispatch, ownProps) => {
  const { playerOnTurn } = ownProps;

  return {
    incrementBetSize: (amount) => {
      dispatch({
        type: "INCREMENT_BET_SIZE",
        playerId: playerOnTurn.id,
        playerStack: playerOnTurn.stack,
        amount: amount,
      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChipAmountControlContainer);