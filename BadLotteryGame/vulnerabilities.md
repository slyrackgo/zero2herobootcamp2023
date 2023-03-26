Security

Overall, I found 9 vulnerabilities inside th BaddLottery.sol contract:
1. Lack of access control: anyone can call the addNewPlayer(), pickWinner(), and payout() functions, including malicious actors.
2. The constructor is empty: this means that the contract can be deployed without any initial setup, leaving it vulnerable to attacks.
3. The prizeAmount variable is never initialized or updated, making it impossible to payout any prize to the winners.
4. The num_players variable is incremented without any validation, making it possible to add more than 50 players to the game.
5. The pickWinner() function is not random: it uses the block timestamp to pick the winner, which is predictable and can be manipulated by miners.
6. The distributePrize() function has a logic error: the loop condition should be i < prize_winners.length instead of i <= prize_winners.length, or it will try to transfer funds to a non-existent index, resulting in a runtime error.
7. The payout() function relies on a hardcoded value of 500000 * 100 wei to distribute the prize, making it inflexible and susceptible to errors.
8. There is no error handling in the contract, which could cause unexpected behavior and loss of funds.
9. The contract imports external code from "@openzeppelin/contracts/token/ERC20/ERC20.sol", but does not use it, making the contract unnecessarily bloated.
