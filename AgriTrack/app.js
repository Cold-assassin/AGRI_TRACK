const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

// Replace with your actual keys
const govSecret = "SBEMDKBGH2NWCYD7ZJVBNJHJKY765YALFEOVVYKMP6KL26YWX4VZYZBA";
const farmerPublic = "GCBFFTBLC4NA4EJDOQAKF73GJYCPXVEDFMVE35OI3AERHJVY2XFDMNYO";

const govKeypair = StellarSdk.Keypair.fromSecret(govSecret);

const sendBtn = document.getElementById("sendBtn");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");

async function getBalance(publicKey) {
  try {
    const account = await server.loadAccount(publicKey);
    const balanceObj = account.balances.find(b => b.asset_type === "native");
    return balanceObj ? balanceObj.balance : "0";
  } catch (e) {
    console.error("Balance fetch error:", e);
    return "Error";
  }
}

// Show balances when page loads
window.addEventListener("DOMContentLoaded", async () => {
  const govBal = await getBalance(govKeypair.publicKey());
  const farmerBal = await getBalance(farmerPublic);

  resultDiv.innerHTML = `
    💼 Government Balance: ${govBal} XLM<br/>
    👨‍🌾 Farmer Balance: ${farmerBal} XLM
  `;
});

sendBtn.addEventListener("click", async () => {
  const amount = amountInput.value;
  if (!amount || isNaN(amount) || Number(amount) <= 0) {
    resultDiv.innerText = "Please enter a valid amount.";
    return;
  }

  try {
    const govAccount = await server.loadAccount(govKeypair.publicKey());
    const fee = await server.fetchBaseFee();

    const transaction = new StellarSdk.TransactionBuilder(govAccount, {
      fee,
      networkPassphrase: StellarSdk.Networks.TESTNET
    })
      .addOperation(StellarSdk.Operation.payment({
        destination: farmerPublic,
        asset: StellarSdk.Asset.native(),
        amount: amount
      }))
      .setTimeout(30)
      .build();

    transaction.sign(govKeypair);
    const txResult = await server.submitTransaction(transaction);

    const govBal = await getBalance(govKeypair.publicKey());
    const farmerBal = await getBalance(farmerPublic);

    resultDiv.innerHTML = `
      ✅ Subsidy of ${amount} XLM sent!<br/>
      🔗 <a href="https://stellar.expert/explorer/testnet/tx/${txResult.hash}" target="_blank">View Transaction</a><br/><br/>
      💼 Government Balance: ${govBal} XLM<br/>
      👨‍🌾 Farmer Balance: ${farmerBal} XLM
    `;
  } catch (e) {
    console.error("Error sending subsidy:", e);
    resultDiv.innerText = "Error sending subsidy. Check keys or balance.";
  }
});
