import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import PlayerMenuDialog from './playerMenuDialog';
import Card from './card';
import './style.css';

class PlayerPanel extends Component {
  render() {
    const { enabledWithCard, cards, isSeated, player, openBuyInDialog } = this.props;

    const {
      currentPlayer,
      openPlayerMenuDialog,
      openingPlayerMenuDialogPlayerId,
    } = this.props;

    // 空席の場合
    if (!player.id) {
      // 自分が着席済みの場合
      if (isSeated) {
        return (<div></div>)
      // 自分が未着席の場合
      } else {
        let seat_label = "Seat " + player.seat_no;
        return (
          <RaisedButton label={seat_label} onTouchTap={openBuyInDialog} />
        )
      }
    }

    //let className = "avatar-" + player.state;

    let panelClass;
    if (player.state === 1) {
      panelClass = 'foldedPanel';
    } else {
      panelClass = 'activePanel';
    }

    let isMe = currentPlayer && currentPlayer.id === player.id;

    return (
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        {enabledWithCard && !isMe && player.state && player.state !== 1 ? (
          <div>
            <div style={{ position: 'absolute', top: '-0.5em', left: '-0.5em', zIndex: 10 }}>
              <Card invisible={true} />
            </div>
            <div style={{ position: 'absolute', top: '-0.3em', left: '0em', zIndex: 10 }}>
              <Card invisible={true} />
            </div>
          </div>
          ) : (<div></div>)
        }

        {enabledWithCard && isMe && cards && cards.length === 2 && player.state !== 1 ? (
          <div>
            <div style={{ position: 'absolute', top: '-8px', left: '-5.2em', zIndex: 10 }}>
              <Card rank={cards[0].rank} suit={cards[0].suit} />
            </div>
            <div style={{ position: 'absolute', top: '-4px', left: '-4em', zIndex: 10 }}>
              <Card rank={cards[1].rank} suit={cards[1].suit} />
            </div>
          </div>
          ) : (<div></div>)
        }
        <div
          className={panelClass}
          onTouchTap={openPlayerMenuDialog}
          style={{ position: 'absolute', zIndex: 50 }}
        >
          <img
            src={player.image_url}
            className="avatarImage"
            alt='avatar'
          />
          <div className="playerPanelTextArea">
            <div className='nickname'>{player.nickname}</div>
            <div className='player-stack'>{player.betSize ? player.stack - player.betSize : player.stack}</div>
          </div>
          <PlayerMenuDialog
            dialogOpen={openingPlayerMenuDialogPlayerId === player.id}
            player={player}
            openBuyInDialog={openBuyInDialog}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => { return {} }
const mapDispatchToProps = (dispatch, ownProps) => {
  const { player } = ownProps;
  return {
    openBuyInDialog: () => {
      ownProps.openBuyInDialog(player.seat_no, player.id)
    },
    openPlayerMenuDialog: () => {
      ownProps.openPlayerMenuDialog(player.id)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPanel);
