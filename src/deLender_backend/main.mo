import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Nat32 "mo:base/Nat32";
import HashMap "mo:base/HashMap";

actor {
  let admin : Principal = Principal.fromText("efout-6x4eq-n4r6j-3mpmc-fsbaq-fdwbl-337b3-jwrou-dy4r4-d6r7q-mqe");

  type UserType = {
    accountId : Text;
    lendingId : Nat;
  };

  type LenderType = {
    accountId : Principal;
    requestAmount : Nat;
    sanctionedAmount : Nat;
  };

  // Correct way to initialize HashMap in older versions of Motoko
 var accounts = HashMap.HashMap<Principal, UserType>(10, Principal.equal, func(p: Principal) : Nat32 { Text.hash(Principal.toText(p)) });
  var lending = HashMap.HashMap<Nat, LenderType>(10, Nat.equal, func(n : Nat) : Nat32 { Nat32.fromNat(n) });

  public func addMoney() : async (Text, Nat) {
    let userPrincipal = "7730386f01d1338a51181035910d6002be592b2911bc5071882bfb78a714bad0";
    accounts.put(admin, { accountId = userPrincipal; lendingId = 0 });
    return ("The Account Details", 1000);
  }
};
