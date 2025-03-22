import Principal "mo:base/Principal";
import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Time "mo:base/Time";
import Debug "mo:base/Debug";
import Error "mo:base/Error";
import Iter "mo:base/Iter";

actor p2pLender {
  stable var tokens : Int = 0;
  let decimals = 1000;
  var admin : Principal = Principal.fromText("efout-6x4eq-n4r6j-3mpmc-fsbaq-fdwbl-337b3-jwrou-dy4r4-d6r7q-mqe");
  stable var hasMinted: Bool = false;

  public type LoanStatus = { #pending; #granted };
  public type LoanRequest = { borrower: Principal; amount: Nat; status: LoanStatus; time: Int };

  public type User = {
    loan: { amount: Nat; paid: Nat; balance: Nat };
    deposits: { amount: Nat; recieved: Nat; pending: Nat };
  };

  var accounts = HashMap.HashMap<Principal, User>(10, Principal.equal, Principal.hash);
  stable var loanRequests: [LoanRequest] = [];

  public shared (msg) func mint() : async Text {
    if (hasMinted) {
      return "No Permission! Already Minted";
    };
    tokens += 1_000_000_000;
    accounts.put(admin, {
      loan = { amount = 0; paid = 0; balance = 0 };
      deposits = { amount = 1000000; recieved = 0; pending = 0 };
    });

    switch (accounts.get(admin)) {
      case (?user) { tokens -= user.deposits.amount; };
      case null { return "Admin account not found."; };
    };

    hasMinted := true;
    return "Minting successful!";
  };

  public query func getAllLoanRequest() : async [LoanRequest] {
    return loanRequests;
  };

  public func requestLoan(borrower: Principal, amount: Nat) : async Text {
    let newLoan: LoanRequest = {
      borrower = borrower;
      amount = amount * decimals;
      status = #pending;
      time = Time.now() / 1_000_000_000;
    };

    loanRequests := Array.append(loanRequests, [newLoan]);
    return "Loan request submitted successfully!";
  };

  public query func getTotalLoan(user: Principal): async Nat {
    switch (accounts.get(user)) {
      case (?userInfo) { userInfo.loan.amount };
      case null { 0 };
    }
  };

  public query func getTotalPendingLoan(user: Principal): async Nat {
    switch (accounts.get(user)) {
      case (?userInfo) { userInfo.loan.balance };
      case null { 0 };
    }
  };

  public query func getTotalDeposits(user: Principal): async Nat {
    switch (accounts.get(user)) {
      case (?userInfo) { userInfo.deposits.amount };
      case null { 0 };
    }
  };


};
