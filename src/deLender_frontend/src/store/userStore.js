import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: {
    principalId: "",
  },
});

export default userAtom;
