// SPDX-License-Identifier: UNLICENSED 

pragma solidity 0.8.18 ;

contract DogCoin{
    uint256 totalSupply = 2000000;
    address public owner;
    event  IncreasedBy(uint256 totalSupply);//Show a new total supply
    event  Sent(address from, address to, uint256 amount);// get the information about transaction
    mapping (address  => uint) public balances; //get the account balance
    mapping (address => Payment) public record;

    struct Payment{
        uint256 amount;
        address receiver;
    }

    modifier onlyOwner{//Allow only deployer make changes to the total supply 
        require(msg.sender == owner, "No owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function increaseTotalSupply() public payable returns(uint256){//Increase total supply by 1000
        require(msg.sender == owner);  
        totalSupply+=1000;//increase total supply
        balances[msg.sender] += 1000;
        emit IncreasedBy(totalSupply);//Show a new total supply
    }

    function  ShowTotalSupply() public view returns(uint256){// Get total supply
        return totalSupply;
    }

    function Send(address receiver, uint256 amount) public payable{
        require(amount <= balances[msg.sender], "Not enough money!");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
        record[receiver] = Payment(amount,receiver);
    }
    
}
