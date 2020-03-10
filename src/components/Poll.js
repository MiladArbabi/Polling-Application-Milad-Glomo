import React, { Fragment } from 'react';
import { PollContext } from './PollContext';
import propTypes from 'prop-types';
import { StyledBtn } from "../Elements";
import { Link, withRouter } from "react-router-dom";
import useLocalState from '../hooks/useLocalState';

const Poll = ({ match: { params, url } }) => {
    const [homeWin, setHomeWin] = useLocalState('Home Win', 0);
    const [itsDraw, setDraw] = useLocalState('Draw', 0);
    const [awayWin, setAwayWin] = useLocalState('Away Win', 0);

    return (
        <PollContext.Consumer>
            {(context) => (
                <div>
                    {!context.voted ? (
                        <Fragment>
                            <h3>{context.game.country}</h3>
                            <h3>{context.game.sport}</h3>
                            <h3>{context.game.name}</h3>
                            <h3>{context.game.state}</h3>
                            <form className="options" onClick={() => window.location.reload()}>
                                <Link key={context.game.id} to={url.replace(`/${params.id}`, `/${context.game.id}`)} onClick={() => context.voted.true}>
                                    <StyledBtn onClick={() => setHomeWin(homeWin)} whileTap={{ scale: 0.85 }} exit={{ opacity: 0 }} >
                                        {context.game.homeName}
                                    </StyledBtn>
                                    <StyledBtn onClick={() => setDraw(itsDraw)} whileTap={{ scale: 0.85 }} exit={{ opacity: 0 }}>
                                        Draw
                                    </StyledBtn>
                                    <StyledBtn onClick={() => setAwayWin(awayWin)} whileTap={{ scale: 0.85 }} exit={{ opacity: 0 }}>
                                        {context.game.awayName}
                                    </StyledBtn>
                                </Link>
                            </form>
                        </Fragment>
                    ) : (
                        <h1> All available games have been voted on </h1>
                    )}
                </div>
            )}
        </PollContext.Consumer>
    )
};

export default withRouter(Poll);

Poll.propTypes = ({
    name: propTypes.string,
    country: propTypes.string,
    state: propTypes.string,
    sport: propTypes.string,
    homeName: propTypes.string,
    awayName: propTypes.string,
}).isRequired
