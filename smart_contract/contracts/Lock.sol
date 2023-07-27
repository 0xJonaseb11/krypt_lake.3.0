//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

import 'hardhat/console.sol';

contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(block.timestamp < _unlockTime, 'UNLOCK TIME SHOULD BE IN THE FUTURE');

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        //to use console.sol
        console.log('Unlock time is %o and block timestamp is %o', unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, 'YOU CAN\'T WITHDRAW YET');
        require(msg.sender == owner, 'YOU AREN\'T THE OWNER' );

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}