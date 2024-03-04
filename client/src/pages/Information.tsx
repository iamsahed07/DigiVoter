import React from 'react';
import '../App.css'; 

const UserManual: React.FC = () => {
  return (
    <div className="content" style={{ marginTop: '100px' , marginLeft: "350px"}}>
      <div className="container" style={{ width: '900px'}}>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-info">
                <h4 className="card-title">User Manual</h4>
              </div>
              <div className="card-body">
                <h4>Welcome </h4>
                <h5>These are few Guidelines for user : </h5>
                <h5>1. Voter Registration</h5>
                <ul>
                  <li>For casting the vote user needs to first register himself. For this registration purpose, the user will be provided a voter registration form on this website.</li>
                  <li>The voter can only register in the registration phase. After the registration phase is over the user can not register and thus will not be able to vote.</li>
                  <li>For registration, the user will have to enter his Aadhar card number and the account address which the user will be using for voting purpose.</li>
                  <li>At the first stage, the user’s age will be checked. If the user is 18 or above 18 years of age then only he is eligible to vote.</li>
                  <li>The second stage is OTP verification. This stage is required to validate the voter itself. After entering the Aadhar number and successful age verification.</li>
                  <li>After entering correct OTP user will get successfully registered.</li>
                </ul>

                <h5>2. Voting Process</h5>
                <ul>
                  <li>Overall, the voting process is divided into three phases. All of which will be initialized and terminated by the admin. Users have to participate in the process according to the current phase.</li>
                </ul>
                <ol>
                  <li><strong>Registration Phase</strong>: During this phase the registration of the users (which are going to cast the vote) will be carried out.</li>
                  <li><strong>Voting Phase</strong>: After initialization of the voting phase from the admin, the user can cast the vote in the voting section. The casting of vote can be simply done by clicking on the “VOTE” button, after which the transaction will be initiated and after confirming the transaction the vote will get successfully casted. After the voting phase gets over the user will not be able to cast a vote.</li>
                  <li><strong>Result Phase</strong>: This is the final stage of the whole voting process during which the results of the election will be displayed at the “Result” section.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManual;