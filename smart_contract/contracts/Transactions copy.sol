// spdx-License-Identifier: MIT
pragma solidity ^0.8.19

contract Transactions {
    uint transactionCount;

    event indexed Transfer (
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain (
        address payable receiver,
        uint amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;
        transactions.push (
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                block.timestamp,
                keyword
            )
        );

        // emit transfer event
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount( ) public view returns (uint256) {
        return transactionCount;
    }


}