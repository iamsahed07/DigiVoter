import React from 'react';

const VotingArea: React.FC = () => {
  return (
    <div className="container" style={{ width: '700px' }}>
      <div id="currentPhase"></div>
      <div id="content">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Party</th>
              <th scope="col">Votes</th>
            </tr>
          </thead>
          <tbody id="contestantsResults"></tbody>
          <hr />
          <p id="accountAddress" className="text-center"></p>
        </table>

        <form onSubmit={(e) => { e.preventDefault(); App.castVote(); }}>
          <div className="form-group">
            <label htmlFor="contestantSelect">Select Contestant</label>
            <select className="select-control" id="contestantSelect"></select>
          </div>
          <button type="submit" className="btn btn-primary">Cast your vote</button>
        </form>
      </div>
    </div>
  );
};

export default VotingArea;
