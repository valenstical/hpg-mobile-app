import { Share } from "react-native";

export const share = async (message: string) => {
  await Share.share({
    message,
    title: "Share using"
  }).catch(() => {});
};
