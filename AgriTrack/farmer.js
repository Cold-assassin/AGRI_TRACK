const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

// Replace with actual keys
const farmerSecret = "SAHIXG7SHIVOT4MLICNQGEQIBY6AWXNA3JLPPKGH7VNSXP4RMJFMB4RP";
const farmerKeypair = StellarSdk.Keypair.fromSecret(farmerSecret);
const farmerPublic = farmerKeypair.publicKey();

const govPublic = "GDDNI342EOXAYEHRJM6SZ2JYX2OZEIEUHYTISOU34C6DB2IUVTYNMMIN";

// Listen for latest transaction
async function loadLatestTransaction() {
  try {
    const transactions = await server.transactions()
      .forAccount(farmerPublic)
      .order("desc")
      .limit(1)
      .call();

    if (transactions.records.length > 0) {
      const txn = transactions.records[0];
      document.getElementById("txnId").textContent = txn.id;
      document.getElementById("amountReceived").textContent = txn.amount || "Check";
      document.getElementById("timestamp").textContent = new Date(txn.created_at).toLocaleString();
    }
  } catch (err) {
    console.error("Error loading transactions:", err);
  }
}

// Claim subsidy (sends a request to the government)
function claimSubsidy() {
  const amount = document.getElementById("claimAmount").value;
  if (!amount || isNaN(amount) || Number(amount) <= 0) {
    alert("Enter a valid amount.");
    return;
  }

  // Ideally this would notify the government backend; simulate for now
  alert(`Claim request for ${amount} XLM sent to government (simulate backend request).`);
}

// Poll for updates every 20 seconds
setInterval(loadLatestTransaction, 20000);
loadLatestTransaction();
